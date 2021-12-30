//Coleção dinâmica de pares chave/valor
//Dinâmica pois podemos adicionar propriedades que ainda não foram instanciadas através de produto.nome
const produto = new Object()
produto.nome = 'Cadeira'
produto.preco = 220

console.log(produto)

delete produto.preco
console.log(produto)

const carro = {
  preco: 2200,
  velocidadeMaxima: 100,
  proprietario: {
    nome: 'lucas',
    endereco: {
      rua: 'Andorinha'
    }
  },
  //podemos adicionar um array de objetos dentro de um objeto
  condutores: [
    {
      nome: 'lucas',
      idade: 20
    },
    {
      nome: 'Ana',
      idade: 10
    }
  ],
  //podemos adicionar uma função dentro do objeto também
  calcularSeguro: function () {}
}

console.log(carro)
