// Cross-anywhere proxy handler for fetching any content with CORS bypass
import { USER_AGENTS, CORS_HEADERS, HTTP_STATUS, CONTENT_TYPES } from './utils/constants.js';
import { cleanResponseHeaders, createProxyUrl, handleRequest, matchesContentType } from './utils/helpers.js';

/**
 * Process M3U8 content by replacing URLs with proxied versions
 * @param {string} content - The M3U8 content
 * @param {string} mediaUrl - Base media URL
 * @param {string} origin - Origin URL
 * @param {Object} headers - Headers to include in proxy URLs
 * @returns {string} - Processed M3U8 content
 */
function processM3U8Content(content, mediaUrl, origin, headers) {
	return content
		.split('\n')
		.map((line) => {
			// Handle URI attributes in tags
			const uriMatch = line.match(/(URI=)(["'])(?<uri>.*?)\2/);
			if (uriMatch) {
				try {
					const [fullMatch, prefix, quote] = uriMatch;
					const resolvedUrl = new URL(uriMatch.groups.uri, mediaUrl).toString();
					const proxyUrl = createProxyUrl(resolvedUrl, origin, headers);
					return line.replace(fullMatch, `${prefix}${quote}${proxyUrl}${quote}`);
				} catch (error) {
					console.error('Error processing URI:', uriMatch.groups.uri, error);
					return line;
				}
			}

			// Pass through stream information lines
			if (line.startsWith('#EXT-X-STREAM-INF')) {
				return line;
			}

			// Handle content URLs
			if (!line.startsWith('#') && line.trim()) {
				try {
					const resolvedUrl = new URL(line.trim(), mediaUrl).toString();
					return createProxyUrl(resolvedUrl, origin, headers);
				} catch (error) {
					console.error('Error processing URL:', line.trim(), error);
					return line;
				}
			}

			return line;
		})
		.join('\n');
}

/**
 * Process VTT content by replacing image URLs with proxied versions
 * @param {string} content - The VTT content
 * @param {string} baseUrl - Base URL for resolving relative paths
 * @param {string} origin - Origin URL
 * @param {Object} headers - Headers to include in proxy URLs
 * @returns {string} - Processed VTT content
 */
function processVTTContent(content, baseUrl, origin, headers) {
	const timestampRegex = /(?<=\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}\s)(.*)/gm;
	const imageRegex = /.+?\.(jpg|jpeg|png|webp|gif)+/g;
	
	return content.replace(timestampRegex, (match) => {
		if (imageRegex.test(match)) {
			const fullUrl = match.startsWith('http') ? match : 
				match.startsWith('/') ? `${baseUrl}${match}` : `${baseUrl}/${match}`;
			return createProxyUrl(fullUrl, origin, headers);
		}
		return match;
	});
}

/**
 * Handle OPTIONS request for CORS preflight
 * @param {Object} res - Express response object
 * @returns {Object} - CORS preflight response
 */
function handleOptionsRequest(res) {
	Object.entries(CORS_HEADERS).forEach(([key, value]) => {
		res.header(key, value);
	});
	return res.status(HTTP_STATUS.NO_CONTENT).send();
}

/**
 * Main fetch handler for cross-anywhere proxy
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<Object>} - Proxied response
 */
export async function fetchHandler(req, res) {
	if (req.method === 'OPTIONS') {
		return handleOptionsRequest(res);
	}

	try {
		const [mediaUrl, decodedHeaders, origin] = handleRequest(req);
		const rangeHeader = req.headers.range;

		const fetchHeaders = {
			'User-Agent': USER_AGENTS.FIREFOX,
			Connection: 'keep-alive',
			...decodedHeaders,
			...(rangeHeader && { Range: rangeHeader }),
		};

		// Remove problematic headers
		delete fetchHeaders.host;
		delete fetchHeaders.origin;

		console.log('Fetching URL:', mediaUrl);

		const response = await fetch(mediaUrl, { headers: fetchHeaders });
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const cleanHeaders = cleanResponseHeaders(response.headers);
		const responseHeaders = {
			...cleanHeaders,
			...CORS_HEADERS,
			'Access-Control-Expose-Headers': Object.keys(cleanHeaders).join(', '),
		};

		const contentType = response.headers.get('Content-Type') || 'application/octet-stream';
		console.log('Content-Type:', contentType);

		// Handle VTT files (subtitle files)
		if (matchesContentType(contentType, CONTENT_TYPES.VTT)) {
			console.log('VTT file found');
			const responseContent = await response.text();
			const baseUrl = mediaUrl.substring(0, mediaUrl.lastIndexOf('/'));
			const processedContent = processVTTContent(responseContent, baseUrl, origin, decodedHeaders);
			
			responseHeaders['Content-Type'] = contentType;
			Object.entries(responseHeaders).forEach(([key, value]) => {
				res.header(key, value);
			});
			return res.status(response.status).send(processedContent);
		}

		// Direct stream for video, audio, and other binary content
		if (matchesContentType(contentType, CONTENT_TYPES.BINARY)) {
			const arrayBuffer = await response.arrayBuffer();
			const responseBody = Buffer.from(arrayBuffer);

			// Check if it's actually video data (TS packets start with 0x47)
			if (responseBody.length > 0 && responseBody[0] === 0x47) {
				console.log('Disguised TS files found');
				responseHeaders['Content-Type'] = 'video/mp2t';
			} else {
				responseHeaders['Content-Type'] = contentType;
			}

			Object.entries(responseHeaders).forEach(([key, value]) => {
				res.header(key, value);
			});
			return res.status(response.status).send(responseBody);
		}

		// For M3U8 and text content
		const responseContent = await response.text();
		const contentLooksLikeM3U8 = responseContent.trimStart().startsWith('#EXTM3U');
		const isM3U8 = contentLooksLikeM3U8 || matchesContentType(contentType, CONTENT_TYPES.M3U8);

		if (isM3U8) {
			console.log('HLS stream found');
			responseHeaders['Content-Type'] = CONTENT_TYPES.M3U8[0];
			const processedContent = processM3U8Content(responseContent, mediaUrl, origin, decodedHeaders);
			
			Object.entries(responseHeaders).forEach(([key, value]) => {
				res.header(key, value);
			});
			return res.status(response.status).send(processedContent);
		}

		// Handle other text content
		responseHeaders['Content-Type'] = contentType;
		Object.entries(responseHeaders).forEach(([key, value]) => {
			res.header(key, value);
		});
		return res.status(response.status).send(responseContent);

	} catch (error) {
		console.error('Error in fetch handler:', error);
		
		// Set CORS headers for error response
		Object.entries(CORS_HEADERS).forEach(([key, value]) => {
			res.header(key, value);
		});

		if (error.message === 'URL parameter is required' || error.message === 'Invalid URL format') {
			return res.status(HTTP_STATUS.BAD_REQUEST).json({ error: error.message });
		}

		return res.status(HTTP_STATUS.SERVER_ERROR).json({
			error: 'Failed to fetch the resource',
			message: error.message,
		});
	}
}
