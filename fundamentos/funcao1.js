//funcao sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}
imprimirSoma(2, 3)
imprimirSoma(2, 3, 4, 5) //irá ignorar os outros números e considerar apenas os 2 primeiros

//Funcao com retorno

function soma(a, b = 1) {
  return a + b
}

console.log(soma(2, 3))
console.log(soma(2)) //como já está definido irá somar com o valor definido, no caso 1
