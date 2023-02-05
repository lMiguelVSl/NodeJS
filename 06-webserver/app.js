const http = require('http');

http.createServer((req, res) => {
    res.write('Hello');
    res.end();
})
    .listen(3000);

console.log('listen localhost:3000');