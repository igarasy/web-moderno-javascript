// A notação ponto permiute muitas coisas como acessar atributos de um objeto, função dentro de um objeto. Permite criar um atributo para um objeto que ainda não tem esse atributo

const obj1 = {}
obj1.name = 'Lucas'
console.log(obj1.name)

function Obj(name) {
  this.name = name
  this.exec = function () {
    console.log('Exec....')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')

console.log(obj2.name)
console.log(obj3.name)

obj3.exec()