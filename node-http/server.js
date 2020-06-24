

// First Node Server

const http = require('http');
const port = 3000;

// create server - gets a request handler as a parameter

const server = http.createServer((request, response) => {
    console.log(request.url);
    if (request.url === '/') {
        response.end('This is the home page');
    } else if (request.url === '/About') {
        response.end('<h1>This is the about page</h1>');
    } else {
        response.end('Sry - 404');
    }
});

server.listen(port, () => {
    console.log(`Listening on Port ${port}`);
});