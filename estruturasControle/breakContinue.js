const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// O break irá agir no bloco mais próximo dele que seja do tipo for, while ou switch. Caso tenham 2, agirá apenas no mais próximo
for (x in nums) {
  if (x == 5) {
    break
  }
  console.log(`${x} = ${nums[x]}`)
}

// O continue irá parar a repetição atual e irá para a próxima, não sairá da repetição mais pulará a repetição que é informada dentro do if (y==5)

//O continue só pode ser usado em laços de repetição (for e while)
for (y in nums) {
  if (y == 5) {
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}
