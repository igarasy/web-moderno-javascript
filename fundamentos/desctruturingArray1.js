const [a] = [10]

// Nós extraimos essas váriaveis de dentro de um array, podendo ignorar posições e usar apenas as que queremos a 

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

//Também podemos extrair váriaveis de um array aninhado em outro, como no exemplo:
// Não é indicado utilizar esse caso

const [, [, nota]] = [
  [, 8, 8],
  [9, 6, 8]
]
console.log(nota)
