//Como esses tipos são funções, podemos criar métodos no prototype e depois acessar eles em qualquer outra string, array ou object que estiver nesse contexto
console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)


//O reverse não está acessível em uma string, mas sim em um array então podemos criar essa função colocando o split('') que irá dividir todas as letras da string, o reverse irá reverter e o join irá juntar novamente essa letras já invertidas

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

//Criamos essa função que irá mostrar o elemento no índice 0 do array, após criado podemos usar em todos outros arrays 
Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//Não podemos substituir comportamentos que já existem, isso gera muitos erros posteriormente 

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())