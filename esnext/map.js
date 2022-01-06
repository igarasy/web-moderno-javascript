/* Com o map conseguimos setar uma chave e o valor que ela irá receber 

Qualquer valor (objetos e valores primitivos) podem ser usados como chave ou valor
*/

const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })

// Conseguimos acessar o valor através do get
console.log(tecnologias.react)
console.log(tecnologias.get('react').framework)

const chavesVariadas = new Map([
  [function () {}, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número']
])

//Não é possível repetir uma chave
chavesVariadas.forEach((vl, ch) => {
  console.log(ch.vl)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(456, 'b')
console.log(chavesVariadas)
