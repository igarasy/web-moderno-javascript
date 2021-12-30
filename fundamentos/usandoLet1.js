// O let irá sempre buscar primeiro a declaração da variavel dentro de seu escopo principal e só em caso de não achar que irá buscar fora do escopo.

let numero = 1
{
  let numero = 2
  console.log('Dentro = ', numero)
}

console.log('Fora =', numero)
