function Carro(velocidadeMaxima = 200, delta = 5) {
  // atributo privado
  let velocidadeAtual = 0

  //metodo publico
  //Nesse caso poderemos instanciar um novo carro e utilizar os metodos publicos criados aqui
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMaxima
    }
  }

  //metodo publico
  //O this faz com que o método fique publico
  this.getVelociadeAtual = function () {
    return velocidadeAtual
  }
}

const uno = new Carro()
uno.acelerar()
console.log(uno.getVelociadeAtual())
