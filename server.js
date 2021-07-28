import http from 'http'

const server = http.createServer((request, response) => {
    if (request.url === '/headers') {
        response.writeHead(200, { 'ContentType': 'application/json' })
        response.end(JSON.stringify(request.headers))
    }else{
        response.writeHead(404, 'Not Found')
        response.end()
    }
})

const port = 3000
server.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})