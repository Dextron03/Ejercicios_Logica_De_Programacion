//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1)
// o no, pe. miFuncion(7) devolverá true.
export const numeroPrimo = (numero) => {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false; 
        }
    }
    return true;
};

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
export const parOImpar = (numero) => {
    if (numero % 2 == 0) {
        console.log("Par");
    }else{
        console.log("Impar");
    }
};
//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
export const deCAF = (grados, tipo) => {
    if(tipo.toLowerCase() == "C".toLowerCase()){
        console.log(`${((grados * 9/5)+32)}°C`);
    }else if (tipo.toLowerCase() == "F".toLowerCase()) {
        console.log(`${(grados-32)/1.8}°F`);
    } else {
        console.log("Porfavor, ingresar C o F.");
    }
};