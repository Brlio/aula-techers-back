import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async (request, response)=>{
    const {url, method} = request
    if(url == '/' && method == 'GET'){
        const template = await fs.readFile('./oi.html', 'utf-8')
        const dadosBanco = await fs.readFile('./inventario.json', 'utf-8')
        const inventario = JSON.parse(dadosBanco)
        console.log("Dados carregados:", inventario)
        const linhaTeste = "<tr> <td> 1 </td>  <td>Espelho magico </td> <td> item magico </td> <td> 1 </td> </tr>"
        const paginaFinal = template.replace("{{TABELA}}", linhaTeste)
        response.setHeader('Content-Type', 'text/html; charset=utf-8;')
        response.writeHead(200)
        response.end(paginaFinal)
    }

})
server.listen(3030)