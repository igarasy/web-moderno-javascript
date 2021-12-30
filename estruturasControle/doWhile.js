// única expressão que fica depois do bloco, podemos declarar a váriavel com o valor para quebrar a repetição que ela acontecerá da mesma forma, pois o while está apenas depois

function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = -1

do {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`Opção escolhida foi ${opcao} `)
} while (opcao != -1)
