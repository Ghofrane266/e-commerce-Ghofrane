const http = require('http')
const port = 4000
const host = "127.0.0.1"

function handleRequest(request, response) {
    if (request.method === "GET" && request.url === "/") {
        response.writeHead(200, { "content-type": 'text/plain' })
        return response.end("first server")
    }
    else if(request.method==="POST"&&request.url==="/"){
      let body=""
    }
    else if(request.method === "GET" && request.url === "/"){
        response.writeHead(200, { "content-type": 'text/html' })

        return response.end(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <title>text</title>
          </head>
          <body>
          <h1>hello world!</h1>
          </body>
        </html>`)
    }
    else {
        response.writeHead(404, { "content-type": 'text/plain' })
        return response.end("404 not found")
    }
}

const server = http.createServer(handleRequest)
console.log(`http://${host}:${port}`)
server.listen(port, host)