//Quando usamos o let ele permitirá acessar o indice que queremos e não apenas o valor de i quando o loop acaba
//Ele guarda uma memória e sabe informar qual era o valor do i em determianda posição do array

const funcs = []

for (let i = 0; i < 10; i++) {
  funcs.push(function () {
    console.log(i)
  })
}

funcs[2]()
funcs[8]()
