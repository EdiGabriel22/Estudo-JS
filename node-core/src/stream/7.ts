import http from "http"
import fs from "fs"

http.createServer(function (req, res) {
    const stream = fs.createReadStream("../../clip.mp4")
    res.writeHead(200, { "Content-Type": "video/mp4" })
    stream.pipe(res)
}).listen(3000)

console.log("rodando")