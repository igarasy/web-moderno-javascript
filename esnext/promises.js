/* Essencialmente, uma promise é um objeto retornado para o qual você adiciona callbacks, em vez de passar callbacks para uma função.

Será uma operação assíncrona, que pegamos o resultado através do then e podemos escolher o que fazer com ele
*/

/* Promise.resolve() e Promise.reject() são atalhos para se criar manualmente uma promise que já foi resolvida ou rejeitada, respectivamente. */

function falarDepoisDe(segundos, frase) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

// O catch() irá tratar o erro caso usemos o reject ao invés de resolve 
falarDepoisDe(3, 'Que legal!')
  .then(frase => frase.concat('?!?'))
  .then(outraFrase => console.log(outraFrase))
  .catch(e => console.log(e))
