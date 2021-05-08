function zeroAEsquerda(num){

    return num >= 10 ? num : `0${num}`;
}

function formataDate(data){

    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1)
    const ano = zeroAEsquerda(data.getFullYear())
    const hora = zeroAEsquerda(data.getHours())
    const min = zeroAEsquerda(data.getMinutes())
    const seg = zeroAEsquerda(data.getSeconds())

    return `${dia} / ${mes} / ${ano} - ${hora}:${min}:${seg}`
}

const data = new Date()
const dataBrasil = formataDate(data)
console.log(dataBrasil)