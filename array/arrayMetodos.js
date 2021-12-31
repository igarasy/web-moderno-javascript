const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() //Remove o último item do array
console.log(pilotos)

pilotos.push('Verstappen') //Adiciona um elemento no último indice
console.log(pilotos)

pilotos.shift() //Remove o primeiro item do array
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona no primeiro indice
console.log(pilotos)

// Splice pode adicionar e remover elementos

//adicionar a partir do indice 2, sem remover nenhum, quais elementos serão adicionados. Sequencia de argumentos que o splice irá receber.
//Ele adiciona os elementos atrás do indice que indicamos
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//Remover
pilotos.splice(3, 1)
console.log(pilotos)

//Cria um novo array a partir do indice que informarmos como argumento, incluindo o indice que informamos
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//Nesse caso ele adicionará o indice um até o 3, o índice final não entrará no array, ficaria do indice 1 ao 3 nesse caso
const algunsPilotos2 = pilotos.slice(1,4)
console.log(algunsPilotos2)

