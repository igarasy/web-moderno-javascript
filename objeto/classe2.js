class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

//O super chama o construtor da classe pai, pasando o argumento sobrenome que é o que esse construtor espera

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva')
  }
}

const filho = new Filho()
console.log(filho)
