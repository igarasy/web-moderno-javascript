// compara a igualdade levando em conta apenas o valor e não o tipo
console.log('01)', '1' == 1)

// precisa ser estritamente igual ao outro, como é string e number, retornará false
console.log('02)', '1' === 1)

console.log('03)', '3' != 3) //Diferente que

//Estritamente diferente, levando em consideração o tipo também
console.log('04)', '3' !== 3)

console.log('05)', 3 < 2)
console.log('06)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

// Nesses casos dará false, pois está comparando apenas o local na memória
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09)', d1 === d2)
console.log('10)', d1 === d2)
//Nesse caso será true, pois compara exatamente o conteúdo e não apenas o lugar na memória
console.log('11)', d1.getTime === d2.getTime)

// O estritamente igual levará em conta o tipo da var e por isso dará como falso
console.log('12)', undefined == null)
console.log('13)', undefined === null)
