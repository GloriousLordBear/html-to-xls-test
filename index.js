const http = require('http');
const conversion = require("html-to-xlsx")();
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  req.on('error', (err) => {
    console.error(err);
    res.statusCode = 400;
    res.end();
  });
  res.on('error', (err) => {
    console.error(err);
  });
  if (req.method === 'GET' && req.url === '/echo') {
    var conversion = require("html-to-xlsx")();
    //TableExport("<table class=\"tg\">    <tr>      <th class= \"tg-yw4l\">coiso</th>      <th class=\"tg-yw4l\">troço</th>      <th class=\"tg-yw4l\">lance</th>      <th class=\"tg-yw4l\">esquema</th>    </tr>    <tr>      <td class=\"tg-yw4l\">3</td>      <td class=\"tg-yw4l\">4</td>      <td class=\"tg-yw4l\">5</td>      <td class=\"tg-yw4l\">6</td>    </tr>  </table>");
    conversion("<table><tr><td>cell value</td></tr></table>", function(err, stream){
    //readable stream to xlsx file
    console.log("yay");
    stream.pipe(res);
    }); 
  } else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  //"<table class=\"tg\">    <tr>      <th class= \"tg-yw4l\">coiso</th>      <th class=\"tg-yw4l\">troço</th>      <th class=\"tg-yw4l\">lance</th>      <th class=\"tg-yw4l\">esquema</th>    </tr>    <tr>      <td class=\"tg-yw4l\">3</td>      <td class=\"tg-yw4l\">4</td>      <td class=\"tg-yw4l\">5</td>      <td class=\"tg-yw4l\">6</td>    </tr>  </table>"