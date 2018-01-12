module.exports = function(router) {


	router.get('/v1/testing', function(req, res) {
		res.status(401).send({"error": "super"})
	});

}