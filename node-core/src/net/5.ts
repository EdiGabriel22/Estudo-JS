import net from 'net';

net.createServer((socket) => {
    let request: Request
    let response: Response
    let buffer = Buffer.alloc(0)
    let chunkCount = 0
    let lastChunk = true
    let contentLength: number
    socket.on('data', (chunk) => {
        buffer = Buffer.concat([buffer, chunk])
        chunkCount++
        if (chunkCount === 1) {
            const requstRaw = chunk.toString("ascii")
            const [requestLineAndHeaders, body] = requstRaw.split("\r\n\r\n")
            const [requestLine, ...headersRaw] = requestLineAndHeaders.split("\r\n")
            const [method, url, protocol] = requestLine.split(" ")
            const headers: { [key: string]: string } = {}
            for(const headerRaw of headersRaw) {
                const [key, value] = headerRaw.split(": ")
                headers[key] = value
            }
            request = new Request(method, url, protocol, headers);
            contentLength = parseInt(headers["Content-Length"])
        }
        const lastChunk = contentLength && buffer.length > contentLength
        if (lastChunk) {
            if (request) {
                const data = buffer.toString()
                const [, body] = data.split("\r\n\r\n")
                request.body = body
                console.log(request.body.length)
            }
            console.log(chunkCount)
            console.log(request)
            response = new Response(200, { "content-type": "text/plain", "User Agent": "net" }, "Ola mundo")
            console.log(response.value)
            socket.write(response.value)
            socket.end()
        }
    })
}).listen(3000)

class Request {
    body?: string
    constructor(
        readonly method: string, 
        readonly url: string, 
        readonly protocol: string, 
        readonly headers: { [key: string]: string }, 
    ) {

    }
}

class Response {
    value: string;
    status: { [key: string]: string } = {
        200: "OK",
        404: "Not Found"
    }
    constructor(
        readonly statusCode: number,
        readonly headers: { [key: string]: string },
        readonly body: string
    ) {
        const separator = "\r\n"
        const responseLine = `HTTP/1.1 ${statusCode} ${this.status[statusCode]}`
        this.value = [
            responseLine,
            separator,
            ...Object.entries(headers).map(entry => `${entry[0]}: ${entry[1]}`),
            body
        ].join(separator);
    }
}

// Invoke-WebRequest -Uri http://localhost:3000 -Method POST -Body "João"