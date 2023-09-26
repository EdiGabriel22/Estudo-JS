import http from 'http'

http.createServer((req, res) => {
    let body = ''
    let i = 0
    req.on('data', (chunk) => {
        body += chunk.toString()
        i++
    })
    req.on('end', () => {
        console.log(i)
        res.end()
    })
}).listen(3000)