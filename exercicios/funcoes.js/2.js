const tipoDeTriangulo = (lado1, lado2, lado3) => {
  if (lado1 == lado2 && lado2 == lado3) {
    console.log('Esse é um triangulo Equilátero, pois todos lados são iguais')
  } else if (lado1 == lado2 || lado2 == lado3 || lado1 == lado3) {
    console.log('Esse é um triangulo Isósceles, pois tem apenas 2 lados iguais')
  } else {
    console.log(
      'Esse é um triangulo Escaleno, pois todos os lados são diferentes'
    )
  }
}

tipoDeTriangulo(3, 3, 3)
tipoDeTriangulo(3, 2, 3)
tipoDeTriangulo(6, 1, 5)
