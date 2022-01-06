//ES8: Object.values/Object.entries
//Values retorna os valores e entries um array com arrays de chave e valor

const obj = { a: 1, b: 2, c: 3, d: 4 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na Notação Literal
const nome = 'Carla'
const pessoa = {
  nome,
  ola() {
    return 'Oi gente!'
  }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
  falar() {
    return 'Cachoro'
  }
}
console.log(new Cachorro().falar())

