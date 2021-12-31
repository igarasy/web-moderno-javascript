const alunos = [
  { nome: 'João', nota: 7.3, bolsista: true },
  { nome: 'Maria', nota: 9.2, bolsista: false },
  { nome: 'Pedro', nota: 9.8, bolsista: true },
  { nome: 'Ana', nota: 8.7, bolsista: false }
]

// Confere se todos alunos são bolsistas ou não
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))


//Confere se algum aluno é bolsista
const algumBolsista = (resultado,bolsista) => resultado || bolsista
console.log(alunos.map(a=> a.bolsista).reduce(algumBolsista))

