const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

/* Dessa maneira conseguimos gerar um novo arquivo passando o diretório atual, o nome do arquivo que desejamos, usamos o Stringfy para converter para JSON e passamos uma callback que recebe o erro e caso retorne o erro irá mostrá-lo, se não irá mostrar a string informada*/

fs.writeFile(
  __dirname + '/arquivoGerado.json',
  JSON.stringify(produto),
  err => {
    console.log(err || 'Arquivo salvo!')
  }
)
