const data = new Date('2021-10-05 00:00:00');

let diaSemana = data.getDay();
let diaSemanaTexto;

switch(diaSemana){
    case 0:
        diaSemanaTexto = 'Domingo';
        break;

    case 1:
        diaSemanaTexto = 'Segunda';
        break;
    
    case 2:
        diaSemanaTexto = 'Terca';
        break;
    
    case 3:
        diaSemanaTexto = 'Quarta';
        break;
    
    case 4:
        diaSemanaTexto = 'Quinta';
        break;

    case 5:
        diaSemanaTexto = 'Sexta';
        break;
    
    case 6:
        diaSemanaTexto = 'Sabado';
        break;
    
    default:
        diaSemanaTexto = '';
        break
}

console.log(diaSemana,diaSemanaTexto);