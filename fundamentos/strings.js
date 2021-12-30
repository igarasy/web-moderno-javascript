const escola = 'Cod3r'

console.log(escola.charAt(0)) // irá selecionar o índice 0 da frase

console.log(escola.charAt(0)) // não irá retornar nada

console.log(escola.charCodeAt(3)) // dá o código da tabela unicode do char

console.log(escola.indexOf('o')) // retornará o indice do elemento

console.log(escola.substring(1)) //irá imprimir do indíce 1 até o final da string

console.log(escola.substring(0, 3)) // imprime do indice um até o 3, mas não imprime o 3

console.log('escola'.concat(escola).concat('1')) // podemos a partir de um literal (dado não armazenado em  váriavel) concatenar com uma string dentro de uma variável

console.log(escola.replace(3, `e`)) // podemos substituir um indice por outro elemento, literal ou váriavel

console.log('Ana, Maria, Pedro'.split(',')) // irá gerar um array
