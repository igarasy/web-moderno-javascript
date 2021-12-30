// estrategia 1 para gerar valor padrão
//Caso não passemos valores, as váriaveis irão assumir o valor de 1, caso passemos, assumirá o valor que foi informando, como o 0 é false, assumirá o valor padrão de 1, caso declaremos ele na chamada da função
//Essa é mais usada quando criamos uma váriavel dentro de uma função 

function soma1(a, b, c) {
  a = a || 1
  b = b || 1
  c = c || 1
  return a + b + c
}

console.log(soma1(), soma1(3), soma1(1, 2, 3), soma1(0, 0, 0))

//valor padrão ecmascript 2015
//caso não declaremos qualquer um dos parametros, ele assumirá o valor de 1, esse é o mais indicado nesse momento

function soma3(a = 1, b = 1, c = 1) {
  return a + b + c
}
