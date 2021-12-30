// Criamos uma função para gerar números aleatórios para utilizar dentro do laço while


function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

let opcao = 0


//enquanto ele for esse diferente de -1, continuará rodando o bloco do código 

while (opcao != -1) {
  opcao = getInteiroAleatorioEntre(-1, 10)
  console.log(`A opção escolhida foi ${opcao}.`)
}
