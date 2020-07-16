const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'Conten-Type': 'application/json' });

        let salida = {
            nombre: 'Gosu',
            edad: 23,
            url: req.url
        }
        resp.write(JSON.stringify(salida));
        resp.end();

    })
    .listen(8080);

console.log('Escuchando el puerto 8080');