// usando a notação literal
const obj1 = {}

// Usando diretamente o object
const obj2 = new Object()
obj2.name = 'lucas'
console.log(obj2)

//Ela irá constuir um objeto quando chamada
// Funções construtoras
function Produto(nome, preco, desc) {
  //O this torna esse atributo público
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
  //Nesse caso o preco e desc só ficarão disponíveis dentro da função, estão encapsulados nela
}

const produto1 = new Produto('Mouse', 200, 0.1)
console.log(produto1.getPrecoComDesconto())

// Função Factory
//Ela irá fabricar algo, nesse caso um objeto

function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('Lucas', 2500, 2)
console.log(f1.getSalario())

