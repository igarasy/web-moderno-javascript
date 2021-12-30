// O json é um formato apenas de dados, ele não irá ler caso tenha uma função dentro
//Ele irá ignorar a função e ler apenas as chaves e valores do objeto
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma() {
    return a + b + c
  }
}

//O código abaixo irá transformar o objeto para o formato JSON
console.log(JSON.stringify(obj))

//Um arquivo JSON precisa ser declarado dessa forma, a chave precisa estar com aspas duplas "a":1 isso dentro de chaves e dentro de aspas simples
console.log(JSON.parse('{"a":1,"b":2, "c":3}'))

//Esse é o formato de um json, declarado em const json
const json = '{"result":true, "count":42}'
const obj1 = JSON.parse(json)
console.log(obj1.count)
