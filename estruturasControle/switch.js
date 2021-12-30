// O switch serve para realizar uma comparação, quando usamos 'case 10:' significa que caso for 10 ele executará a linha de baixo, no caso de ser 9, podemos deixar apenas uma única menssagem, pois por padrão ele sairá de um case e já irá para outro se quisermos mudar isso devemos usar o 'break'

//O switch é uma seleção multipla, não é uma expressão relacional(que retorna v ou f), podemos passar valores e tipos para ele. Devemos colocar o break para que ele execute e saia do bloco do switch

// O 'default' é para quando não se encaixar nas opções anteriores e não precisamos colocar no final, mas caso fique no meio precisará do break

const imprimirResultado = function (nota) {
  switch (Math.floor(nota)) {
    case 10:
    case 9:
      console.log('Quadro de honra')
      break
    case 8:
    case 7:
      console.log('Aprovado')
      break
    case 6:
    case 5:
    case 6:
      console.log('Reuperação')
      break
    case 3:
    case 2:
    case 1:
    case 0:
      console.log('reprovado')
      break
    default:
      console.log('nota inválida')
  }
}

imprimirResultado(9)
imprimirResultado(7.42)
