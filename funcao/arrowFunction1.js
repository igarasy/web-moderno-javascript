//Função escrita de forma normal 
let dobro = function (a){
  return a * 2
}

//Função escrita no formato arrow, nesse caso sobrescrevemos a variavel já declarada. 
//Caso quisessemos chamar já no momento de declarar, precisaria ter o let antes de dobro
dobro = (a) =>{ return 2 * a}

// Nesse caso, que retorna apenas uma coisa, não precisamos usar o return e ele já ficará implicito, retornando (2 * a)
// E o 'a' continua sendo o parametro 
dobro = a => 2 * a
console.log(dobro(1))

//Função normal
let ola = function (){
  return 'Olá'
}

//arrow function
ola = () => {return 'Olá'}

//arrow function reduzida 
ola = () => 'olá'
console.log(ola())
