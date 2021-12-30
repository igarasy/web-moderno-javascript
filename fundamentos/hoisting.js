// É quando o interpretador move a declaração de função, váriavel ou classe para o topo do escopo(içamento), como no exemplo a seguir, mesmo não sendo declarada antes de ser chamada, o interpretador entenderá que ela existe, apenas não tem valor definido ainda
//Caso não tivessemos alguma declaração de a, ai sim iria gerar um erro pois ele não seria undefined, uma vez em que não foi nem declarado
// O efeito de içamentro não ocorre quando declararmos a váriavel com let 

console.log('valor de a = ', a)
var a = 10
console.log('a = ',a)
