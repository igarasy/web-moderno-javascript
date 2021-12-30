// Exemplo de callback no browser
// Toda vez que clicarmos na tela a frase será disparada, pois configuramos o click do mouse na tag body 
document.getElementsByTagName('body')[0].onclick = function () {
  console.log('O evento ocoreu!')
}
