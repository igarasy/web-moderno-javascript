// Object.preventeExtensions - Ele não irá permitir que o objeto seja estendido, não conseguiremos adicionar novos atributos nele, podemos excluir mas não adicionar
//Podemos modificar mas não podemos adicionar

const produto = Object.preventExtensions({
  nome: 'Qualquer',
  preco: '1.99',
  tag: 'promocao'
})

//Ele não é extensivel pois n podemos adicionar novos atributos nesse objeto
console.log('Extensivel:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

//Object.seal - Não conseguimos adicionar nem excluir novos elementos, mas conseguimos mexer nos que já existem
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

//Object.freese = selado + valores constantes, não conseguimos incluir, excluir e nem modificar nenhum dado do objeto
