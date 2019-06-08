# Crear una programa que devuelva la operación pedida

- El programa debe:

   - Pedir la operación a realizar.
   - Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedir el segundo parámetro hasta que ingrese un numero distinto de cero.

[Video ejemplo](https://www.useloom.com/share/fa6e9529e01d427d89c84e414fb3bde0)

**Documentación:**

[do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)

var operacion = prompt('Ingrese operacion)
switch(operacion){
   case 'suma':
   var op1 = parseInt(prompt('ingrese operando 1'))
   var op2 = parseInt(prompt('ingrese operando 2'))
   console.log(op11 + op2)
   break
   case 'division':
   var op1 = parseInt(prompt('ingrese operando 1'))
   var op2 = parseInt(prompt('ingrese operando 2'))
   while(op2 === 0)
      op2 = parseInt(prompt('ingrese operando 2 distinto de 0'))
  }
  console.log(op1 / op2)
  break
 }