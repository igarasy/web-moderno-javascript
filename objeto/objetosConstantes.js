//Pessoa sempre irá apontar para o mesmo endereço de memória e não poderá ser alterado, pois é uma constante

const pessoa = { nome: 'João' }
pessoa.nome = 'Lucas'
console.log(pessoa)

//O método freeze faz com que não consigamos mais mexer no object

Object.freeze(pessoa)

pessoa.nome = 'Noemie'

console.log(pessoa)
