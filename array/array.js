//O array é um objeto especial, não existe o tipo de dados array
//Devemos trabalhar com dados homogeneos dentro do array, sempre colocar os mesmos dados dentro dele

console.log(typeof Array, typeof new Array(), typeof [])

//Podemos declarar um array dessas formas, o mais indicado é o literal (aprovados=['nomes do array', 'separados por virgula'])
let aprovados = new Array('Bia', 'Carlos', 'Ana')

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

//Formas de adicionar elementos dentro de um array, o primeiro é mais indicado para substituir elementos que estão no array e o segundo para adicionar novos elementos de fato
aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

//Nesse caso conseguimos adicionar no indice 9, porém todos elementos no intervalo de 4 a 9, serão undefined
aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)

//O sort irá deixar o array em ordem alfabética
aprovados.sort()
console.log(aprovados)

//Podemos excluir um elemento do array, mas nesse caso não irá mudar o indice dos outros, irá apenas retornar undefined para o elemento que excluimos

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

//A função splice serve para add elementos, remover, e adicionar e remover ao mesmo tempo, recebe os argumentos(indice ao qual se deve iniciar a alteração na lista, indica o número de antigos elementos que devem ser removidos, os elementos que queremos adicionar no array)
//Nesse caso a partir de Carlos(indice 1), iremos excluir apenas um elemento

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0,'Elemento1', 'Elemento2')
console.log(aprovados)


