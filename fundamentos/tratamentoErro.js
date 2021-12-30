//Quando acontece um erro podemos mandar o código ir para outro bloco, quando isso acontecer, através do try e catch, o throw será a mensagem que será retornada

// Essa funçao irá retornar a mensagem quando der erro
function tratarErroELancar(erro) {
  throw new Error('...')
}

// O try irá tentar executar e caso não consiga irá executar o catch depois disso, que chamará a função, enviando o error captado

//O finally irá retornar mesmo que nenhuma das opções de certo 
function imprimirNomeGritado(obj) {
  try {
    console.log(obj.name.toUpperCase() + '!!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('Final')
  }
}
const obj = { nome: 'Lucas' }
imprimirNomeGritado(obj)
