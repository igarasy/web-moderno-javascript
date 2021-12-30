/* Essa é uma forma de criar uma função map, criando um novo array, percorrendo ele com o for
e colocando dentro do novo array os elementos através do callback que recebe o índice atual, o indice total e o this
que é o array atual que estamos trabalhando, ele irá retornar um novo array, assim como o map*/
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.5}'
]

/*Nesse caso convertemos o array para JSON, 
depois criamos uma função que retorna apenas o preço do produto */

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
