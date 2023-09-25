import http from 'http'

http.createServer((req, res) => {
    let body = ''
    let i = 0
    req.on('data', (chunk) => {
        body += chunk.toString()
        i++
        console.log(req.method)
    })
    req.on('end', () => {
        console.log(i)
        console.log(body)
        res.end()
    })
}).listen(3000)