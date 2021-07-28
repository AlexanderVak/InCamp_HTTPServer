import http from 'http'

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content.type': 'text/plain'})
    response.end('Hello world')
})

const port = 3000
server.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})