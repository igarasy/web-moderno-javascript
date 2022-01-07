/*Curso ORIGAMID - JavaScript completo 

o then() espera a promisse ser concluída para ser executado

O valor do próximo then sempre será o valor retornado

Podemos passar um segundo argumento para o them, que será executado caso a promessa seja rejeitada

O finally() sempre será executado, a promisse sendo aceita ou não
*/

const promesa = new Promise(function (resolve, reject) {
  let condicao = true
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: 'Andre', idade: 28 })
    }, 1000)
  } else {
    reject(Error('Um erro ocorreu'))
  }
})
  .then(resolucao => console.log(resolucao))
  .catch(rejeitada => console.log(rejeitada))
  .finally(() => {
    console.log('Acabou!')
  })

const login = new Promise(resolve => {
  setTimeout(() => {
    resolve('Usuário logado')
  }, 1000)
})

const dados = new Promise(resolve => {
  setTimeout(() => {
    resolve('Dados Carregados')
  }, 1500)
})

/* O método all() do Promise, irá receber um array com promessas 

Ele retorna um array com os itens que passamos 

*/
const carregouTudo = Promise.all([login, dados])
carregouTudo.then(resolucao => {
  console.log(resolucao)
})

/*Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da
primeira resolvida*/
const carregouTudo2 = Promise.race([login, dados])
carregouTudo2.then(resolucao => {
  console.log(resolucao)
})
