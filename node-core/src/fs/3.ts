import fs from "fs/promises"

async function write() {
    const text: string[] = []
    text.push("Hello World!")
    text.push("Olá Mundo!")
    text.push("Hallo Welt!")
    text.push("Hola Mundo!")
    text.push("Ciao Mondo!")
    fs.writeFile("../../test.txt", text.join("\n"))
}

write()