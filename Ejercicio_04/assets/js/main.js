import {convertirBinarioDecimal, aplicarDescuento, tiempoTranscurrido} from "./ejercicios.js"

console.log(convertirBinarioDecimal(100, 2)); // Debería devolver 4
console.log(convertirBinarioDecimal(4, 10)); // Debería devolver 100

console.log(aplicarDescuento(1000, 20));

console.log(tiempoTranscurrido(new Date(1984,4,23)));