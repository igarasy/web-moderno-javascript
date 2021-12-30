function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,

  //Nesse caso como a função getPreco está declarada no escopo global, não precisamos colocar os parenteses no momento de chama-la

  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())

const carro = { preco: 4990, desc: 0.1 }

//Chamamos a função e passamos o carro através do call e apply, ele irá aplicar essa função para o objeto nos parenteses
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

// Os argumentos para o call podem ser passados por virgula, o primeiro será o contexto e os outros os argumentos, respectivamente
console.log(getPreco.call(carro, 0.17, '$'))

//No caso do apply, precisaremos definir um array que contenha os parametros da função
console.log(getPreco.apply(carro, [0.17, '$']))
