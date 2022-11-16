const path = require('path');

//this allow HTML to be served up by the server.
module.exports = function(app) {
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../../client/index.html'));
  });
};