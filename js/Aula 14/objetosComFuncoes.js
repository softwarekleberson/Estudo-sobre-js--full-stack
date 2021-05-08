function criarPessoa (nome, sobrenome,idade){
    return {
        nome : nome,
        sobrenome : sobrenome,
        idade : idade
    };
}

const pessoa1 = criarPessoa('kleber', 'silva', 51)
console.log(pessoa1.nome)

const pessoa2 = criarPessoa('artur', 'picole', 26)
console.log(pessoa2)