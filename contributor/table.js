var http = require('http');
var tab = require('./tabl');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
 res.write("The table is " + "<br>"  +  tab.tabl());

  res.end();
}).listen(8000);