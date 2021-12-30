// par nome/valor
//como a declaração de const foi feita em contextos (escopos)distintos, quando declaramos ela novamente, não fará diferença


const saudacao = 'Opa' //Contexto léxico 1 (é o local que essa váriavel foi declarada).

function exec() {
  const saudacao = 'Falaaa' // Contexto léxico 2
  return saudacao
}

const cliente = {
  nome: 'Lucas',
  idade: 21,
  peso: 90, // Contexto léxico 3
  endereco: {
    logradouro: 'Rua andorinha 16',
    numero: 16
  }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
