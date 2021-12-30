function soBoaNoticia(nota) {
  if (nota >= 7) {
    console.log('Vc passou com a nota de ' + nota)
  } else {
    console.log('Vc reprovou, sua nota foi ' + nota)
  }
}

nota = 7

soBoaNoticia(9)

// Podemos usar também para conferir se um valor é real, e será mostrado apenas se for real

function seForVerdadeEuFalo(valor) {
  if (valor) {
    console.log('É verdadeiro....' + valor)
  }
}

seForVerdadeEuFalo('')
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
