import {palabraAlReves} from "../../../Ejercicio_02/assets/js/ejercicios.js"

// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe.
// miFuncion(100,2) devolverá 4 base 10.
export const convertirBinarioDecimal = (numero, base) => {
    let numeroConvertido = "";

    if (base === 2) { 
        // Convertir de binario a decimal
        numero = palabraAlReves(String(numero));
        let resultado = 0;
        for (let i = 0; i < numero.length; i++) {
            resultado += parseInt(numero[i]) * (2 ** i);
        }
        return resultado;
    } else if (base === 10) { 
        // Convertir de decimal a binario
        while (numero > 0) {
            numeroConvertido = (numero % 2) + numeroConvertido;
            numero = Math.floor(numero / 2);
        }
        return numeroConvertido || "0";
    }
}

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe.
 miFuncion(1000, 20) devolverá 800. */

export const aplicarDescuento = (monto, descuento) => {return monto - (monto * (descuento/100))}

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy,
 pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */
export const tiempoTranscurrido = (date) => {
    let fechaActual = new Date();
    let contador = 0;
    let userYear = date.getFullYear();

    while(fechaActual.getFullYear() != userYear){
        userYear += 1;
        contador += 1;
    }
    
    return contador;
}