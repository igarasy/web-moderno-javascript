function compras(trabalho1, trabalho2) {
  //Um ou outro precisa ser verdadeiro
  const comprarSorvete = trabalho1 || trabalho2

  //Os dois precisam ser verdadeiros
  const comprarTv50 = trabalho1 && trabalho2

  //Nesse caso um precisa ser diferente do outro
  const comprarTv32 = trabalho1 != trabalho2

  //Irá retornar false caso ele seja verdadeiro por padrão
  const manterSaudavel = !comprarSorvete

  //Isso já irá criar um objeto, podemos omitir o nome da chave e colocar apenas o valor
  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
