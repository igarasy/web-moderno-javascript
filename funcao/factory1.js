//Factory simples
//Será uma função que sempre irá retornar um objeto

function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())
