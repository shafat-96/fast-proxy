/**
 * Checks if content is likely to be binary based on non-printable characters
 * @param {string} content - The content to check
 * @returns {boolean} - True if content is likely binary
 */
export const isLikelyBinary = (content) => {
	if (!content || !content.length) return false;

	const nonPrintableCount = content.split('').filter((char) => char.charCodeAt(0) < 32 && !'\n\r\t'.includes(char)).length;

	return nonPrintableCount > content.length * 0.1;
};

/**
 * Cleans response headers by removing duplicates and CORS headers
 * @param {Headers} headers - Response headers
 * @returns {Object} - Cleaned headers object
 */
export const cleanResponseHeaders = (headers) => {
	const cleanHeaders = Object.fromEntries(
		Array.from(headers.entries()).filter(([key], i, arr) => arr.findIndex(([k]) => k.toLowerCase() === key.toLowerCase()) === i)
	);

	delete cleanHeaders['Access-Control-Allow-Origin'];
	delete cleanHeaders['access-control-allow-origin'];

	return cleanHeaders;
};

/**
 * Creates a proxy URL for content
 * @param {string} url - Original URL
 * @param {string} origin - Origin URL
 * @param {Object} headers - Headers to include
 * @returns {string} - Proxy URL
 */
export const createProxyUrl = (url, origin, headers) => {
	// Don't encode the URL if it's already encoded or is a direct URL
	const urlPart = url.includes('%') ? url : encodeURIComponent(url);
	const hasHeaders = headers && Object.keys(headers).length > 0;
	const headersPart = hasHeaders ? `&headers=${btoa(JSON.stringify(headers))}` : '';
	return `${origin}/fetch?url=${urlPart}${headersPart}`;
};

/**
 * Checks if content type matches any of the provided patterns
 * @param {string} contentType - Content type to check
 * @param {string[]} patterns - Patterns to match against
 * @returns {boolean} - True if content type matches any pattern
 */
export const matchesContentType = (contentType, patterns) => {
	return patterns.some((pattern) => contentType.includes(pattern));
};

/**
 * Decodes headers from base64 or URL-encoded format
 * @param {string} encodedHeaders - Base64 or URL-encoded headers
 * @returns {Object} - Decoded headers object
 */
export const decodeHeaders = (encodedHeaders) => {
	const headers = {};

	if (!encodedHeaders) {
		return headers;
	}

	try {
		let decodedString = encodedHeaders;
		const isBase64 = /^[A-Za-z0-9+/=]+$/.test(encodedHeaders) && encodedHeaders.length % 4 === 0;

		// Attempt to decode the headers string
		try {
			decodedString = isBase64 ? atob(encodedHeaders) : decodeURIComponent(encodedHeaders);
		} catch (error) {
			console.error('Error decoding headers string:', error);
			return headers;
		}

		// Parse the decoded string as JSON
		let headersObj;
		try {
			headersObj = JSON.parse(decodedString);
			if (!headersObj || typeof headersObj !== 'object') {
				throw new Error('Invalid headers format');
			}
		} catch (error) {
			console.error('Error parsing headers JSON:', error, 'Decoded string:', decodedString);
			return headers;
		}

		// Validate and clean headers
		Object.entries(headersObj).forEach(([key, value]) => {
			if (typeof key === 'string' && (typeof value === 'string' || typeof value === 'number')) {
				headers[key] = String(value);
			} else {
				console.warn(`Invalid header value for ${key}:`, value);
			}
		});

		return headers;
	} catch (error) {
		console.error('Error processing headers:', error);
		return headers;
	}
};

/**
 * Handles incoming requests by extracting and validating URL and headers
 * @param {Object} req - Express request object
 * @returns {Array} - Array containing [targetUrl, headers, origin]
 * @throws {Error} - If URL is missing or invalid
 */
export const handleRequest = (req) => {
	const { url: encodedUrl, headers: headersBase64, ref } = req.query;

	if (!encodedUrl) {
		throw new Error('URL parameter is required');
	}

	// For direct URLs, don't try base64 decoding
	let targetUrl = encodedUrl;
	if (/^[A-Za-z0-9+/=]+$/.test(encodedUrl)) {
		try {
			targetUrl = atob(encodedUrl);
		} catch (error) {
			console.warn('Failed base64 decode, using URL as-is');
		}
	}

	// If the URL is percent-encoded, decode it
	try {
		if (targetUrl.includes('%')) {
			targetUrl = decodeURIComponent(targetUrl);
		}
	} catch (error) {
		console.warn('Failed URL decode, using URL as-is');
	}

	// Validate URL format
	try {
		new URL(targetUrl);
	} catch (error) {
		throw new Error('Invalid URL format');
	}

	const headers = decodeHeaders(headersBase64);
	if (ref) {
		let referer = ref.startsWith('http') ? ref : `https://${ref}`;
		referer = referer.endsWith('/') ? referer : `${referer}/`;
		headers['Referer'] = referer;
	}

	// Get origin from request
	const protocol = req.secure ? 'https' : 'http';
	const host = req.get('host');
	const origin = `${protocol}://${host}`;

	return [targetUrl, headers, origin];
};
