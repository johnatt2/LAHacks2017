var app, bodyParser, config, express, path;

path = require('path');

express = require('express');

bodyParser = require('body-parser');

config = require('./config');

app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('service', path.basename(__dirname));

require('./routes')(app);

app.listen(config.port, function() {
  return console.log("running on port " + config.port);
});