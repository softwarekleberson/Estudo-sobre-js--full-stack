function meuEscopo(){

    const form = document.querySelector('.form');
    const res = document.querySelector('.res');

    //Criada duas variaveis para selecionar e pegar os elemntos tanto do form quanto do res, para exibir o resultado

    const pessoas = [];

    function recebeEventoForm (evento){
        evento.preventDefault();

        // evento.preventDefault serve para nao apagar o resultado a cada envio

        const nome = form.querySelector('.nome');
        const cargo = form.querySelector('.cargo');
        const empresa = form.querySelector('.empresa');
        const salario = form.querySelector('.salario');

        // pega cada elemento e selheciona pela sua classe pegou do form pois esses dados vem do form

        pessoas.push({

            nome: nome.value,
            cargo : cargo.value,
            empresa : empresa.value,
            salario : salario.value
        });

        // deu um push no vetor de cada envio feito por cada preenchimento

        console.log(pessoas);
        
        res.innerHTML += `<p>${nome.value} ${cargo.value} ` +
        `${empresa.value} ${salario.value}</p>`;

        // exibe o resultado do envio no campo do html
    }

    form.addEventListener('submit', recebeEventoForm);

    // envia tudo
}

meuEscopo();