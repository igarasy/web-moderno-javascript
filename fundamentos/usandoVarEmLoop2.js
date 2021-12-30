//Como var não tem a caracteristica de escopo, só poderemos acessar o valor final de i, que é quando ele para de ser executado no looping

const funcs = []

for (var i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
