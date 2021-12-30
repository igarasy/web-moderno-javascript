// Mesmo dentro de um loop uma váriavel declarada com 'var'
//Pode ser utilizada fora dela, o valor será o que o fez sair do bloco caso seja "i < 10". Será 10 pois é quando o looping é interrompido e roda o código de fora

for (var i = 0; i < 10; i++) {
  console.log(i)
}

console.log('i = ', i)
