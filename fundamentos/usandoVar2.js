//O valor de 'número' será sobscrito pois pode ser acessado fora do escopo de quando é declarado como 2

var numero = 1

{
  var numero = 2
  console.log('dentro =', numero)
}
console.log('fora = ', numero)
