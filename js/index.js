


// en esta entrega realizo una simulacion de calculo de un prestamo personal, que me genere un 30% de interes sobre el valor de la cuota cada mes. 






let prestamo = 0;
let cantidadCuota = 0;
let cuota = 0;

 

prestamo = parseInt(prompt("Ingrese monto del prestamo: "));
 console.log (prestamo);
 

cantidadCuota = parseInt(prompt("Ingrese candidad de cuotas: "));
console.log (cantidadCuota + " cantidad de cuotas ");
 

cuota = (prestamo / cantidadCuota) ;
console.log (cuota + " valor de la cuota ");


valorInteres = (cuota) * 0.3;
console.log ( valorInteres  +  " intereses de la cuota " );

valorCuotaInteres = (valorInteres * cantidadCuota);
console.log (valorCuotaInteres + " intereses generado ");

importePrestamoCuota = (prestamo + valorCuotaInteres);
console.log (" devolucion total prestamo y intereses es de $ " + importePrestamoCuota);





 