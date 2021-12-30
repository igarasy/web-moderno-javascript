//Callback é quando chamamos uma função apenas quando determinado evento acontecer
//Nesse caso o evento é o loop e a cada novo elemento ele chama a função novamente, o evento em si são os elementos do array

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

