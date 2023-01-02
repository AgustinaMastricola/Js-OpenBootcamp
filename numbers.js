/* Crea un archivo JS que contenga las siguientes líneas
- Una variable que contenga tu altura en centímetros (entero)
- Una variable que contenga tu altura en metros (número de coma flotante)
- Una variable que contenga tu peso en kilogramos (número de coma flotante)
- Una variable que contenga tu altura en metros redondeada hacia arriba
- Una variable que contenga tu peso en kilogramos redondeado hacia abajo */

let myHeight = 164;
let myHeightMeters = 1.64;
let myWeight = 57.600;
let roundMyHeight = Math.round(myHeightMeters);
let roundMyWeight = parseInt(myWeight)

console.log(roundMyHeight, roundMyWeight);
