//O fs já vem instalado nos módulos do node

const fs = require('fs')
const caminho = __dirname + '/arquivo.json'

//sincrono ...
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assincrono...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`${config.db.host}:${config.db.port}`)
})

//Podemos acessar o JSON dessa forma também, que é sincrona:
const config = require('./arquivo.json')
console.log(config.db.host)

/*Nesse caso podemos ler com o readdir() que receberá uma callback e irá ler o arquivo
O __dirname sempre fará referência ao diretório atual 

*/

fs.readdir(__dirname, (err, arquivos) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivos)
})
