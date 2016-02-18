module.exports = {
	'/': require('./webapp/routes'),
	'/api':require('./api/routes'),
	'/login':require('./auth/routes')
}