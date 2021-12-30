//Operador ternário é o que envolve 3 partes, a primeira é uma expressão relacional "maior ou igual"(>=7) a segunda é o que irá acontecer se for verdadeiro(?'Aprovado') e a terceira é o que irá ocorrer se for falso

//A resposta desse operador é retornar algum dos dois valores, para falso ou verdadeiro
const resultado = nota => (nota >= 7 ? 'Aprovado' : 'Reprovado')
console.log(resultado(7))
console.log(resultado(5))
