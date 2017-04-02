var config, engine, express;

express = require('express');

engine = require('ejs-locals');

config = require('../config');

module.exports = function(app) {
  app.engine('ejs', engine);
  app.set('views', __dirname + "/../views");
  app.set('view engine', 'ejs');
  app.use('/', express["static"](__dirname + "/../public"));
  app.express = express;
  return require('./main')(app);
};