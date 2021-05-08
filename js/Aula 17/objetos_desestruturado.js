const pessoa = {
    nome :'Kleberson',
    sobrenome : 'silva',
    idade : '26',
    endereco : {
        Rua : 'vila do arrow',
        numero : 30
    }
};

// Atribuicao via desestruturacao
// Nao pode usar o mesmo atributo duas vezes

/*

const {sobrenome} = pessoa;
console.log(sobrenome);

const {endereco} = pessoa;
console.log(endereco);

const {nome, idade, endereco} = pessoa;
console.log(nome ,idade);

*/

// resto captura tudo exceto esse nome, sao os que estao a esquerda

const{nome, ...resto} = pessoa;
console.log(resto);