// Caso queiramos, o if consegue executar a linha de código abaixo dele mesmo sem o bloco de código, mas apenas a linha logo após o if

function teste1(num) {
  if (num >= 7)
   console.log('O número é maior')
  console.log('final...')
}

teste1(9)
teste1(3)

// Não utilizar o ponto e virgula com as estruturas de controle, pois ele entenderá que ele será a linha para executar abaixo do if e não executará o restante 


