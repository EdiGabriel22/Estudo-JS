import net from 'net';

net.createServer((socket) => {
    let body = ''
    let i = 0
    socket.on('data', (chunk) => {
        const requstRaw = chunk.toString("ascii")
        const [requestLineAndHeaders, body] = requstRaw.split("\r\n\r\n")
        const [requestLine, ...headers] = requestLineAndHeaders.split("\r\n")
        const [method, url, protocol] = requestLine.split(" ")
        console.log(method, url, protocol)
        console.log(headers)
        console.log(body)
        socket.end()
    })
}).listen(3000)