// Armazenando uma função em uma váriavel
const imprimirSoma = function (a, b) {
  console.log(a + b)
}

imprimirSoma(2, 3)

//outra forma de escrever função com arrow (arrow substitiu a palavra function)
const soma = (a, b) => {
  return a + b
}

console.log(soma(2, 3))

//retorno implicito
//função sem as chaves irá retornar o a-b
const subtracao = (a, b) => a - b
console.log(subtracao(5, 1))

// função de um único parametro e ja executa o console.log apenas com ele 
const imprimir2 = a => console.log(a)
imprimir2('Legalll')