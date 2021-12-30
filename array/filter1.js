/*Criará um novo array, filtrando as informações de acordo com o que passarmos para a função callback
a função callback recebe como parametro o p que é cada elemento do array
*/

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.29, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

/* Dentro do filter, colocamos qual condição irá filtrar os elementos dentro do array 
Caso a condição seja atendida, os elementos irão retornar, se não for atendida eles não retornarão
*/
console.log(produtos.filter(function(p){
    return p.preco > 500 & p.fragil == true
}))

/* Dessa forma também dará certo
Não precisamos comparar o fragil, ele já retorna true or false
*/
const verificaPreco = p => p.preco >= 500
const verificaFragil = p => p.fragil

console.log(produtos.filter(verificaPreco).filter(verificaFragil))