// Criamos uma função relacionada ao tipo Numbem e podemos utiliza-la quando usarmos um number

//O this, se refere ao número que chamamos e o código da função compara se o número está entre o inicio e o fim

Number.prototype.entre = function (inicio, fim) {
  return this >= inicio && this <= fim
}

// Criamos um código que antes de executar o else, realiza mais uma conferência, chamado de "else if"

const imprimirResultado = function (nota) {
  if (nota.entre(9, 10)) {
    console.log('Quadro de Honra')
  } else if (nota.entre(7, 8.99)) {
    console.log('Aprovado')
  } else if (nota.entre(4, 6.99)) {
    console.log('Recuperação')
  } else if (nota.entre(0, 3.99)) {
    console.log('Reprovado')
  } else {
    console.log('nota inválida')
  }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2.3)
