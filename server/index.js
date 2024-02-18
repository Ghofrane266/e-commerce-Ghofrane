const http = require('http')
const port = 4000
const host = "127.0.0.1"

function handleRequest(request, response) {
    if (request.method === "GET" && request.url === "/") {
        response.writeHead(200, { "content-type": 'text/plain' })
        return response.end("first server")
    }
    else {
        response.writeHead(404, { "content-type": 'text/plain' })
        return response.end("404 not found")
    }
}

const server = http.createServer(handleRequest)
console.log(`http://${host}:${port}`)
server.listen(port, host)