// operador ... rest (juntar) / spread (espalhar)
// usar rest com parâmetro de função

// usar spread com objeto, irá espalhar um objeto em outro
const funcionario = { nome: 'Lucas', salario: 12500.0 }
const clone = { ativo: true, ...funcionario }
console.log(clone)

// usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)
