//O this nesse contexto, irá acessar o nome do local em que ele foi chamado, no caso dentro do objeto mesmo.
//Ele acessára o atributo dentro do objeto, pois colocamos o this, caso não colocassemos, não daria certo

const pessoa = {
  nome: 'lucas',
  falar() {
    console.log(this.nome)
  }
}
pessoa.falar()

//Quando o falar() não estiver dentro do contexto do objeto, o valor de nome não será definido, pois o this não conseguirá achar qual é o seu valor

const falar = pessoa.falar
falar()

// O bind tem o poder de dar o contexto para a função, ele informará que o this nesse caso é o contexto do objeto pessoa 
//Ele amarra um objeto a execução do objeto, o this será o objeto passado para a função bind

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
