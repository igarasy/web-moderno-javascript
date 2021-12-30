const valores = [7.7, 8.9, 5.2, 4.2]
console.log(valores[0], valores[3])

valores[4] = 10 // adiciona um novo número no array
console.log(valores)
console.log(valores.length) // informa quantos elementos tem no array

valores.push(false) //podemos adicionar diferentes dado no array
console.log(valores)

console.log(valores.pop()) //tira o último item do array

delete valores[0] //irá retirar o elemento do índice 0 

console.log(typeof valores) //o Array é um objeto no JS

