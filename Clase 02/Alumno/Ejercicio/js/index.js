var dia = prompt('ingrese dia')

switch (dia) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log('dia habil')
    break;
    case 'sabado':
    case 'domingo':
        console.log('finde')
    break;
default:
        console.log('no es un dia valido')
    break;
}