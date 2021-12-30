//Cadeia de protótipos (prototype chain)

const avo = { atributo1: 'A' }

//Nesse caso abaixo, indicamos que o avó será a herança(prototype) de pai
const pai = { __proto__: avo, atibuto2: 'B' }
const filho = { __proto__: pai, atributo3: 'C' }

//Caso ele não encontre no objeto que chamamos, irá procurar nos outros em que ele herda, no caso de filho ele herda pai e avo, caso tenha um atributo igual em outro objeto, ele levará em conta o primeiro que encontrar na cadeia
console.log(filho.atributo1)

//Para fazermos prótotipos de um objeto também podemos usar a função setPrototypeOf(ferrari,carro) o primeiro será o objeto e o segundo o seu protótipo

Object.setPrototypeOf(ferrari, carro)

//Também podemos criar através do Object.create, passamos a herança que o objeto a ser criado irá receber:

const filha2 = Object.create(pai, {
  nome: { value: 'Bia', writable: false, enumerable: true }
})
