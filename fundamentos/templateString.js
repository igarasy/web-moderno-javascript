const nome = 'rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
  Olá 
  ${nome}!
`
console.log(concatenacao, template) // template string é uma forma de criar strings e tornar o código mais legível, podemos quebrar linha, utilizando o ``(tudo que estiver dentro da crase, caso pulemos linha no código, irá pular também na exibição) e concatenar alguma váriavel na frase, ou soma de algo, colocando dentro de ${}

// expressões
console.log(`1+ 1 = ${1 + 1}`)

//podemos chamar uma função dentro de ${}
