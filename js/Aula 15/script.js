/*
* Date() pega o dia o mes e o ano, hora, minuto, segundo
*/

const data = new Date();
console.log(data.toString());

/*
* 1970 1/1
*/

const tresHoras = 60 * 60 * 3 * 1000;
const diaUm = new Date(0 + tresHoras);
console.log(diaUm.toString());

/*
* Dia dois de janeiro de 1970
*/

const umDia = 60 * 60 * 24 * 1000;
const diaDois = new Date(0 + tresHoras + umDia);
console.log(diaDois);

/*
*Criar data qualquer
* Ano, mes, dia, hora, minuto, segundos, milisegundos
*/

const diaQualquer = new Date(2021, 4, 6, 12, 22, 500);
console.log(diaQualquer.toString());

/*
*Formato mais comum de datas
*/

const dataPadrao = new Date('2021-05-17 20:10:10')
console.log(dataPadrao);

/*
*Dia
*Mes
*Ano
*Hora
*Min
*Seg
*Milise
*Dia semana
*/

const teste = new Date();

console.log('Dia', teste.getDate());
console.log('Mes', teste.getMonth() + 1);
console.log('Ano', teste.getFullYear());
console.log('Hora', teste.getHours());
console.log('Min', teste.getMinutes());
console.log('Seg', teste.getSeconds());
console.log('Ms', teste.getMilliseconds());
console.log('Dia da semana', teste.getDay() + 1);

console.log(teste.toString());


