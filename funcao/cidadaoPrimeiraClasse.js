// High order function - Permite receber outras funções como parametro e/ou retorno

//Criar de forma literal
function fun1() {}

//Armazenar a função em uma váriavel
const fun2 = function () {}

//Armazenar a função em um array
const array = [
  function (a, b) {
    return a + b
  },
  fun1,
  fun2
]
console.log(array[0](2, 3))

//Armazenar a função em um atributo de objeto
const obj = {}
obj.falar = function () {
  return 'opa'
}
console.log(obj.falar())

//Passar uma função como parametro para outra função
function run(fun) {
  fun()
}
run(function fun() {
  console.log('Carregando....')
})

//Uma função pode conter outra função
//Quando chamamos o soma, o resultado será uma função, então basta colocar o (4) que ele já entenderá que é um parametro

function soma(a, b) {
  return function (c) {
    console.log(a + b + c)
  }
}
soma(3, 2)(4)
