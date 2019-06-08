alert('uto el que lee')

var prefijo
var genero = prompt("Cual es tu genero?");
var edad = prompt('Ingrese su edad!');
genero = genero.toLowerCase();
edad = parseInt(edad);

switch (genero) {
    case 'masculino':
        prefijo = 'sr.';
        break;
    case 'femenino':
        prefijo = 'sra.';
        break;
    default:
        prefijo = 'sx.'
        break;
 }
 var mensaje;

 if (edad >= 18){
     mensaje = 'Ud. es mayor de edad, puede ingresar';
 } else {
     mensaje = 'Ud. es menor de edad y no puede ingresar';
 }

 console.log(prefijo + '' + mensaje);