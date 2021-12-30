// Quando trabalhamos com objetos e fazemos o objeto b = a como no exemplo abaixo, ele irá passar o endereço de a para b, então os 2 apontarão para o mesmo lugar. Se realizarmos alterções em b irá alterar em a e vice-versa

//Isso não acontece com tipos primitivos em uma váriavel qualquer, pois o que é passado é apenas o valor e não o endereço que a váriavel aponta na memória 

const a = {}
a.name = 'Lucas'
b = a
console.log(b)

let valor // não inicializada 
console.log(valor) //por padrão será undefined
// is not defined é quando nem inicializamos a variável ainda 

valor = null // ausência de valor, pois não aponta para nenhum local de memória. Mas ela foi definida, mesmo que não aponte para local algum
// caso queiramos zerar o valor de uma váriavel, iremos usar o null 

const produto = {}
console.log(produto.preco) 
produto.preco = 3.50
//resultado é undefined, pois o produto existe mais o preço ainda não está disponível 
// evitar atribuir o undefined para uma váriavel ou objeto 

// se quisermos tirar um atributo do objeto usamos o delete produto.preco

produto.preco = null // sem preço
