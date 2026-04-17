import http from 'node:http'
import fs from 'node:fs/promises'

const server = http.createServer(async (request, response)=>{
    const {url, method} = request
    if(url == '/' && method == 'GET'){
        const template = await fs.readFile('./oi.html', 'utf-8')
        const dadosBanco = await fs.readFile('./inventario.json', 'utf-8')
        const inventario = JSON.parse(dadosBanco)
        console.log("Dados carregados:", inventario)
        const linhasTabela = inventario.map(item => `
        <tr>
        <td> ${item.id} </td>
        <td> ${item.nome} </td>
        <td> ${item.categoria} </td>
        <td> ${item.quantidade} </td>
        </tr> `) 
        const paginaFinal = template.replace("{{TABELA}}", linhasT)
        response.setHeader('Content-Type', 'text/html; charset=utf-8;')
        response.writeHead(200)
        response.end(paginaFinal)
    }

})
server.listen(3030)