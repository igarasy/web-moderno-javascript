//var pode ser acessado por chamadas foras do bloco em que está incluso(escopo) e também dentro dele

{
  {
    {
      {
        var sera = 'Será??'
        console.log(sera)
      }
    }
  }
}
console.log(sera)

// quando criamos uma váriavel fora de uma função ela será global (window) window é um objeto
//não é indicado fazer como global pois pode dar conflito com outras váriavies

//quando var está dentro de uma função, só poderá ser usada nesse escopo
function teste() {
  var local = 123
  console.log(local)
}
teste()

console.log(local)
