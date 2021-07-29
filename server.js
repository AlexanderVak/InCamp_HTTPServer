import http from 'http'
import url from 'url'
import { pluralize } from './pluralize.js'


const server = http.createServer((request, response) => {
    const baseUrl = request.protocol + '://' + request.headers.host + '/'
    const reqUrl = new URL(request.url, baseUrl)

    if (request.url === '/headers') {

        response.writeHead(200, { 'ContentType': 'application/json' })
        response.end(JSON.stringify(request.headers))

    } else if (reqUrl.pathname === '/plurual' && reqUrl.search != '') {

        const urlParams = new URLSearchParams(reqUrl.search)
        const entries = urlParams.entries()
        let params = paramsToObject(entries)

        response.writeHead(200, { 'ContentType': 'application/json' })
        response.end(JSON.stringify(pluralize(params.number, params.forms[0], params.forms[1], params.forms[2])))

    } else if (reqUrl.pathname === '/frequency') {
        if (request.method === 'POST') {
            let body = ''
            request.on('data', chunk => {
                body += chunk
            })
            request.on('end', () => {
                console.log('body', body);
            })
            response.writeHead(200, {'Content-Type': 'application/json'})
            response.end('post received')

        } else {
            response.writeHead(404, 'Not Found')
            response.end()
        }

    } else {
        response.writeHead(404, 'Not Found')
        response.end()
    }
})

export function paramsToObject(entries) {
    let params = {}
    for (const [key, value] of entries) {
        value.includes(',') ? params[key] = value.split(',') : params[key] = Number(value)
    }
    return params
}

const port = 3000
server.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
})