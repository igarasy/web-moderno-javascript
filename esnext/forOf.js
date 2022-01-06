/* Ao contrário do for in, ele não itera por índice e sim por valores
 */
for (let letra of 'Lucas') {
  console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
  console.log(i)
}

for (let assunto of assuntosEcma) {
  console.log(assunto)
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
  console.log(assunto)
}

for (let chave of assuntosMap.keys()) {
  console.log(chave)
}

for (let valor of assuntosMap.values()) {
  console.log(valor)
}

for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor)
}

const abc = new Set(['a', 'b', 'c'])
for (let letra of abc) {
  console.log(letra)
}
