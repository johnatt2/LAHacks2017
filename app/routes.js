module.exports = function(app) {
	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	var my_api_key = "Yu3Wctchc6tGC33r62NDXqP4DAOVwiSjK38UCC6OYywa5hf85YWOepgh0Q1HV8zX";
	var client = new(require('linode-api').LinodeClient)(my_api_key);
	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		client.call('test.echo', {msg: "hello, self!"}, function (err, res) {
			if (err) throw err;
			console.log("I said '" + res.msg + "' to myself. Whee!");
		});
		client.call('avail.linodeplans', {PlanID: 11}, function (err, res) {
			console.log(res);
		});
		res.sendfile('./public/index.html');
	});

	app.get('/api/plans', function(req, res) {
		client.call('avail.linodeplans', function (err, planResponse) {
			res.json(planResponse);
		});
	});

};