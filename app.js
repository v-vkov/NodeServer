const http = require('http'),
      url = require('url'),
      path = require('path'),
      fs = require('fs');


 http.createServer(function(req, res) {
    const uri = url.parse(req.url).pathname;
    const filename = path.join(process.cwd(), uri);
          switch (uri) {
            case '/':
                fs.readFile('./index.html', (err, data) => {
                    res.end(data)
                });
                break;

            case '/login':
                fs.readFile('./login.html', (err, data) => {
                    res.end(data)
                });
                break;

            case '/sign':
                fs.readFile('./sign.html', (err, data) => {
                    res.end(data)
                });
                break;
    
            default:
                fs.readFile('./notFound.html', (err, data) => {
                    res.end(data)
                });
                break;
        }

    console.log (filename, uri);
}).listen(3000);

