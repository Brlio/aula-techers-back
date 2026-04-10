import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async (request, response)=>{
    const {url, method} = request
    if(url == '/' && method == 'GET'){
        const template = await fs.readFile('./oi.html', 'utf-8')
        response.setHeader('Content-Type', 'text/html; charset=utf-8;')
        response.writeHead(200)
        response.end(template)
    }

})
server.listen(3030)