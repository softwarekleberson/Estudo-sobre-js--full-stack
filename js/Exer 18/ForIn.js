const frutas = ['maça','pera','uva','melao']

// For bom esse em, sera o meu padrao agora

for(let i in frutas){
    console.log(frutas[i])
}

const pessoa = {
    nome :'kleberson',
    sobrenome : 'santos',
    idade : 26
};


/* for para objetos
*pega a chave que nesse caso é nome, sobrenome, idade
*Depois entra em cada objeto nesse caso pessoa,e ai entra no valor dela
*/

for(let chave in pessoa){
    console.log(chave, pessoa[chave])
}