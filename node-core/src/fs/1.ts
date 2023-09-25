import fs from "fs"

fs.readFile("../../books.csv", function (err, data) {
    console.log(data.toString("utf8"))
})