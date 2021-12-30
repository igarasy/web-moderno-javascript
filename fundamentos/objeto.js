/* Um objeto é uma coleção de chave/valor 
vc tem o nome de um atributo e passa um valor para ele, podendo ser texto, número boolean
Um objeto pode ter outro objeto dentro dele. O objeto produto pode ter dentro dele outro objeto chamado categorias que possui o nome da categoria 
*/

const prod1 = {} // as {} criam um objeto
prod1.name = 'celular ultra mega'
prod1.price = 4998.9

console.log(prod1)

const prod2 = {
  name: 'Camisa Polo', //podemos criar um objeto dessa forma também 
  price: 79.90,
}
console.log(prod2)

//Json não é um objeto JSON é um formato textual e não uma coleção chave/valor 
