//Com a arrow function o this não irá variar em outro contexto
//Mesmo que chamado dentro de setInterval, ele não irá mudar, pois o contexto não influenciará

function Pessoa(){
  this.idade = 0 

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  },1000)
}

new Pessoa