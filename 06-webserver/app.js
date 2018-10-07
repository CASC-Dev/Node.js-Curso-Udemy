const http = require('http');

http.createServer((req, res) => {
    res.write('Hola, mundo!');
    res.end();
}).listen(3005);

console.log('Escuchando en puerto 3005');
