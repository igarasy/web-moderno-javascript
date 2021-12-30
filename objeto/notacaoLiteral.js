//Podemos criar um objeto literal com os atributos da seguinte forma, é necessário declarar antes pois o código irá falar que não foi definido caso nao declararmos

const a = 1
const b = 2
const c = 3

const obj1 = { a, b, c }
console.log(obj1)

//Nesse caso podemos colocar o valor dentro de um atributo da seguinte forma:
const nomeAtributo = 'nota'
const valorAtributo = 7.8

const obj3 = {}
obj3[nomeAtributo] = valorAtributo
console.log(obj3)

//Dessa forma também é possível alterar o valor de algum atributo
const obj4 = { [nomeAtributo]: valorAtributo }
console.log(obj4)


