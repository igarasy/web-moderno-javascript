//Informamos a porta que iremos utilizar

const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados')

//

/* O bodyParser serve para pegarmos o formato urlenconded e transformar em objeto na aplicação */
app.use(bodyParser.urlencoded({ extended: true }))

//O método get irá pegar o arquivo produtos e enviar através do send para a porta 3003. Também converterá o arquivo para JSON
app.get('/produtos', (req, res, next) => {
  res.send(bancoDeDados.getProdutos())
})

/*Quando adicionamos os <:> após a </> na URl iremos acessar via paramêtro, caso queiramos acessar o id 1 é só digitar id 1

O paramêtro que contém a informação está na requisição(res), pois é ela que trás os parâmetros, o res irá apenas enviar 

O <.params>, serve para indicar qual é o paramêtro que queremos acessar da requisição feita
*/
app.get('/produtos/:id', (req, res, next) => {
  res.send(bancoDeDados.getProduto(req.params.id))
})

/*O post servirá para submeter os dados e salvar um novo produto no banco de dados 

Para isso, criamos um novo objeto produto que receberá o nome do corpo da requisição e o preço do corpo da requisição
Salvamos o objeto novo em produto e enviamos com o send
*/
app.post('/produtos', (req, res, next) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  })
  res.send(produto) // converterá para JSON
})

app.listen(porta, () => {
  console.log(`Servidor executando na porta ${porta}`)
})
