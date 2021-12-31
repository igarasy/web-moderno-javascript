/*O método concat irá concatenar 2 Arrays*/

const filhos = ['Lucas', 'Pedro']
const filhas = ['Stephany', 'Maria']
const todosFilhos = filhos.concat(filhas)
console.log(todosFilhos)

/* Também podemos concatenar string soltas com um array, como mostra o exemplo */
console.log([].concat('Lucas', 'Pedro', ['João', 'Marlene']))
