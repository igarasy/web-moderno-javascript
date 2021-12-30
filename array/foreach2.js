/* Criamos um método no prototype de array, que poderá ser acessado por qualquer array no código,
esse método irá percorrer cada elemento do array */

Array.prototype.forEach2 = function(callback){
 for (let i = 0; i < this.length; i++) {
     callback(this[i], i, this)
 }
}

const aprovados = ['Agatha', 'Aldo' ,'Daniel', 'Raquel']

aprovados.forEach2(function(nome,indice){
    console.log(`${indice + 1} ) ${nome}` )
})