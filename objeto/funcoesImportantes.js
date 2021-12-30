const pessoa = {
  nome: 'Rebeca',
  idade: 18,
  peso: 70
}

//Acessa respectivamente as chaves, valores e chaves valores

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

//Irá passar por todos elementos e imprimir sua chave e seu valor, usamos o destructuring, para pegar os elementos chave e valor e passar para as váriaveis com esses nomes
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`)
})

//O método Assign, irá pegar o primeiro argumento como destino e os outros como atributos e irá colocar todos os atributos dentro do destino
//Ele irá concatenar os atributos ao objeto passado como primeiro parametro, caso ele já exista, será sobrescrito pelo que foi passado ao assign 

const destino = {}
const atributo1 = { nome: 'Lucas' }
const atributo2 = { sobrenome: 'Igarashi' }
const obj = Object.assign(destino, atributo1, atributo2)
console.log(destino)
