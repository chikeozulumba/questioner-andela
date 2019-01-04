export function errorRxx(response, code, status, error) {
	return response.status(code).send({
		status,
		error,
	});
}

export function response2xx(response, code, status, data) {
	return response.status(code).send({
		status,
		data,
	});
}

export function notFound(req, res, next) {
	// respond with html page
	if (req.accepts('html')) return errorRxx(res, 404, false, 'Not found');

	// respond with json
	if (req.accepts('json')) return errorRxx(res, 404, false, 'Not found');

	// default to plain-text. send()
	return errorRxx(res, 404, false, 'Not found');
}
