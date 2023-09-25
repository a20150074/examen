var nombre = prompt("Escrive un nombe:");
var respuesta1 = prompt("1. ¿Cuándo se realizará la inauguración de las Olimpiadas?\nA. Lunes 02 de octubre\nB. Viernes 29 de setiembre\nC. Jueves 28 de setiembre");

var respuesta2 = prompt("2-¿De qué color es la prompoción de 2do de secundaria?\nA. Celeste o Turquesa\nB: 6 meses de oscuridad inimterrumpida\nC: 6 meses de alternancia de luz y oscuridad");

var respuesta3 = prompt("3. Nuevo deporte incluido este año\nA. Futsal femenino\nB. Balonmano\nC. Marcha atlética");

var parseInt(correcto) = 0
var parseInt(incorrecto) = 0

if(respuesta1 == "B"){
    var parseInt(puntaje) = correcto + 25;
}
if(respuesta2 == "A"){
    var parseInt(puntaje) = correcto + 25;
}
if(respuesta3 == "C"){
    var parseInt(puntaje) = correcto + 25;
}
if( puntage<= 50){
    document.write(nombre + " has logrado: " + puntaje + " FELISITACIONES" );

}else{document.write(nombre + " has perdiodo: " + puntaje + " Puedes hacerlo mejor" );

}