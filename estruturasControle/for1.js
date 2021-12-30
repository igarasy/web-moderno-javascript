// o for é um laço de repetição que recebe como argumento (a várivel, a condição para continuar o laço, incrementa 1 na váriavel para que no momento que ela atinga o máximo pare de rodar)

for (let i = 1; i <= 10; i++) {
  console.log(`i = ${i}`)
}

//podemos navegar dentro de um array para saber o seu tamanho, com o notas[i] conseguimos acessar a nota no indice que quisermos, a cada vez que passa no for
const notas = [3.2, 4.2, 5.4, 6.5, 3.4]
for (i = 0; i < notas.length; i++) {
  console.log(`Nota é igual: ${notas[i]}`)
}
