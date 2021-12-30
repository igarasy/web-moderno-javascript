const imprimirResultado = function (nota) {
  if (nota >= 7) {
    console.log('Aprovado, sua nota foi de: ', nota)
  } else {
    console.log('Reprovado, sua nota foi de:', nota)
  }
}

imprimirResultado(9)
imprimirResultado(7)
