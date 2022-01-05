/* O axios é um client https que faz requisições para obter informações de algo que está remoto*/

const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
  const funcionarios = response.data
  console.log(funcionarios)
})
