var _;

_ = require('lodash');

var my_api_key = "Yu3Wctchc6tGC33r62NDXqP4DAOVwiSjK38UCC6OYywa5hf85YWOepgh0Q1HV8zX";
var client = new(require('linode-api').LinodeClient)(my_api_key);

module.exports = function(app) {
  app.get('/', function(req, res, next) {
      client.call('avail.linodeplans', {PlanID:3}, function(error, response) {
          if(error) console.log(error);
          console.log(response);
      });
      client.call('avail.datacenters', {}, function(error, response) {
          if(error) console.log(error);
          console.log(response);
      });
    return res.render('index');
  });

  app.get('/plans', function(req, res, next){
    var lat = req.query.lat;
    var long = req.query.long;
    console.log(lat, long);
    client.call('avail.linodeplans', {PlanID:3}, function(error, response) {
      if(error) console.log(error);
        console.log(response);
        res.jsonp(response);
      });
    });
}