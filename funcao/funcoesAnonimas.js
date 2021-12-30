//Nesse exemplo, criamos uma função anonima armazenada na variavel 'soma'

//E outra função anonima armazenada na variavel imprimir Resultado, nela chamamos a função soma e passamos os parametros que serão recebido ao chamar a função 'imprimirResultado'

const soma = function (x, y) {
  return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
  console.log(operacao(a, b))
}

//Podemos chamar a função passando diversos parametros, até uma função pois o imprimirResultado tem uma função como argumento padrão
imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x, y) {
  return x - y
})
imprimirResultado(3, 4, (x, y) => x * y)

//Exemplo de função anonima dentro de um objeto
const pessoa = {
  falar: function () {
    console.log('Opa')
  }
}
pessoa.falar()
