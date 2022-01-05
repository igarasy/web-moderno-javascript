const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

/* Como o ./instanciaNova retorna uma função factory, adicionamos o () para chamar ela quando retornar */
const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)


/*Quando criamos um novo objeto com a função factory, o valor será diferente. 

Quando criamos através de module.exports, caso o objeto já tenha sido criado, ele retornará sempre a mesma instância, para qualquer uma das criações. Pois o node cria um cache*/
