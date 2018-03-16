const http = require('http');
const convert = require("html-to-xlsx")();
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((request, response) => {
  request.on('error', (err) => {
    console.error(err);
    response.statusCode = 400;
    response.end();
  });
  response.on('error', (err) => {
    console.error(err);
  });
  if (request.method === 'GET' && request.url === '/echo') {
    request.pipe(response);
    //TableExport("<table class=\"tg\">    <tr>      <th class= \"tg-yw4l\">coiso</th>      <th class=\"tg-yw4l\">troço</th>      <th class=\"tg-yw4l\">lance</th>      <th class=\"tg-yw4l\">esquema</th>    </tr>    <tr>      <td class=\"tg-yw4l\">3</td>      <td class=\"tg-yw4l\">4</td>      <td class=\"tg-yw4l\">5</td>      <td class=\"tg-yw4l\">6</td>    </tr>  </table>");
    convert("<table class=\"tg\"><tr><th class= \"tg-yw4l\">coiso</th><th class=\"tg-yw4l\">troço</th><th class=\"tg-yw4l\">lance</th><th class=\"tg-yw4l\">esquema</th></tr><tr><td class=\"tg-yw4l\">3</td><td class=\"tg-yw4l\">4</td><td class=\"tg-yw4l\">5</td><td class=\"tg-yw4l\">6</td></tr></table>",  function(err, stream){
        //readable stream to xlsx file
        stream.pipe(res);
      });  
  } else {
    response.statusCode = 404;
    response.end();
  }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });

  //"<table class=\"tg\">    <tr>      <th class= \"tg-yw4l\">coiso</th>      <th class=\"tg-yw4l\">troço</th>      <th class=\"tg-yw4l\">lance</th>      <th class=\"tg-yw4l\">esquema</th>    </tr>    <tr>      <td class=\"tg-yw4l\">3</td>      <td class=\"tg-yw4l\">4</td>      <td class=\"tg-yw4l\">5</td>      <td class=\"tg-yw4l\">6</td>    </tr>  </table>"