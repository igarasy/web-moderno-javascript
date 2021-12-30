//Função factory(que cria um objeto novo) nesse caso nós pedimos alguns atributos para preencher as informações do objeto

function criarProduto(preco, nome) {
  return {
    preco,
    nome,
    desconto: 0.1
  }
}
console.log(criarProduto(200, 'Mouse'))
