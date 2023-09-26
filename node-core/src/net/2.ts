import net from 'net';

net.createServer((socket) => {
    let request: Request
    socket.on('data', (chunk) => {
        const requstRaw = chunk.toString("ascii")
        const [requestLineAndHeaders, body] = requstRaw.split("\r\n\r\n")
        const [requestLine, ...headersRaw] = requestLineAndHeaders.split("\r\n")
        const [method, url, protocol] = requestLine.split(" ")
        const headers: { [key: string]: string } = {}
        for(const headerRaw of headersRaw) {
            const [key, value] = headerRaw.split(": ")
            headers[key] = value
        }
        request = new Request(method, url, protocol, headers, body)
        console.log(request)
        socket.end()
    })
}).listen(3000)

class Request {
    constructor(
        readonly method: string, 
        readonly url: string, 
        readonly protocol: string, 
        readonly headers: { [key: string]: string }, 
        readonly body: string
    ) {

    }
}

// Invoke-WebRequest -Uri http://localhost:3000 -Method POST -Body "João"