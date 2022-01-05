//middleware ou chain of responsability
/* O primeiro paramêtro recebido é um objeto aonde colocaremos os dados e o segundo é a função que irá quando chamada irá disparar o próximo passo na cadeia de responsabilidade (chain of responsability) */

const passo1 = (ctx, next) => {
  ctx.valor1 = 'mid1'
  next()
}

const passo2 = (ctx, next) => {
  ctx.valor2 = 'mid2'
  next()
}

const passo3 = ctx => (ctx.valor3 = 'mid3')

const exec = (ctx, ...middlewares) => {
  const execPasso = indice => {
    middlewares &&
      indice < middlewares.length &&
      middlewares[indice](ctx, () => execPasso(indice + 1))
  }
  execPasso(0)
}

const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx)
