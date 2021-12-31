/* Na abordagem, imperativa é descrito passo a passo como deve ser feito, mas tudo em uma mesma função, o que não é tão interessante */

/* Na abordagem declarativa, é descrito o que deve ser feito e não como, o que é mais interessante pois dividimos as responsabilidades em códigos menores.
No caso do reduce, não veremos os detalhes internos, iremos passar apenas os valores para ele 
*/

const alunos = [
  { nome: 'Maria', nota: 9.2 },
  { nome: 'João', nota: 8.4 }
]

//Imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}
console.log(total1 / alunos.length)

//Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual

const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)
