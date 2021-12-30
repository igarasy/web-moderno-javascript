/* Ele gera um novo array que sairá com os dados transformados, 
de acordo com a forma que quisermos transformar */

const nums = [1, 2, 3, 4, 5]

/* Passamos para o map a função callback que irá transformar 
cada um dos elementos no momento em que percorrer eles
Nesse caso ela irá multiplicar todos elementos por 2 */

//O map semrpe irá gerar um novo array, não modificará o original
let resultado = nums.map(function (e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e*3
const paraDinheiro = e =>  `R$ ${parseFloat(e).toFixed(2)}`

//podemos chamar o map dando como parametro a função que criamos 
let resultado2 = nums.map(soma10)
let resultado3 = nums.map(triplo)
let resultado4 = nums.map(paraDinheiro)
console.log(resultado2,resultado3,resultado4)

/*Também podemos chamar mais de um map  a partir do resultado do primeiro map, 
visto que o resultado será um array: */
resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)