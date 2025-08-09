export const CORS_HEADERS = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'GET, OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type, Authorization, Range',
	'Access-Control-Max-Age': '86400',
};

export const USER_AGENTS = {
	FIREFOX: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:139.0) Gecko/20100101 Firefox/139.0',
	CHROME: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
};

export const CONTENT_TYPES = {
	M3U8: ['application/vnd.apple.mpegurl', 'application/x-mpegurl', 'audio/mpegurl', 'audio/x-mpegurl'],
	VTT: ['text/vtt'],
	BINARY: ['video/', 'audio/', 'image/', 'application/octet-stream'],
};

export const HTTP_STATUS = {
	OK: 200,
	NO_CONTENT: 204,
	BAD_REQUEST: 400,
	FORBIDDEN: 403,
	SERVER_ERROR: 500,
};
