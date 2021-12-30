//O setInterval, chama uma função em um determinado periodo de tempo, que é informado após a declaração de função dentro dele, no caso após o this.idade nesse contexto

//Nesse caso o bind após a função fará com que ele aponte de fato para o idade de pessoa, pois quem está chamando ele é o seInterval e não tem 'idade' declarada nele 

function Pessoa() {
  this.idade = 0

  setInterval(
    function () {
      this.idade++
      console.log(this.idade)
    }.bind(this), 1000)
}

new Pessoa
