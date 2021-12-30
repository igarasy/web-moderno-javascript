//No primeiro exemplo é sem callback, irá adicionar ao array de notas baixas caso sejam menores do que 7
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

let notasBaixas = []
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas.push(notas[i])
  }
}
console.log(notasBaixas)

//Nesse caso a função filter será chamada para cada item do array e recebe uma função que retora verdadeiro ou falso, caso seja verdadeiro irá adicionar no array notasBaixas2
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7
})
console.log(notasBaixas2)

//Nesse caso é igual o exemplo anterior, mas usamos uma arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
