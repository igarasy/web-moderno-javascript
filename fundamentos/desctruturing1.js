// Operador de desestruturação, ele extrai algo de algum lugar.

const pessoa = {
  nome: 'Lucas',
  idade: 5,
  endereco: {
    logradouro: 'Rua andorinha',
    numero: 1000
  }
}

//Nesse caso, ele irá extrair a váriavel nome e idade de pessoa o "=" quer dizer de qual objetvo ele vai tirar o valor dessas váriaveis

const { nome, idade } = pessoa
console.log(nome, idade)

//Caso queiramos extrair e dar um nome diferente, podemos usar o ":"

const { nome: n, idade: i } = pessoa
console.log(n, i)

// Posso tentar acessar um atributo que ainda não foi definido para o objeto e retornará undefined

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//Caso queira acessar um objeto dentro do outro, usamos:

const {
  endereco: { logradouro, numero, cep }
} = pessoa
console.log(logradouro, numero, cep)
