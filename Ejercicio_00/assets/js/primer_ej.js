/* 
1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá 10.
 */
 

export const contadorDeCaracteres = (cadena) => {
    let contador=0;
        for (const element of cadena) {
            contador += 1
        };

        return contador;
};

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe.
 miFuncion("Hola Mundo", 4) devolverá "Hola". */

export const recortarTexto = (cadena, numCaracteres) => {
    for(let i = 0; i <= cadena.length; i++){
        if(i==numCaracteres){
            cadena = cadena.slice(0, numCaracteres)
            break;
        }
    };

    return cadena
}

/* 
3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter,
 pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
 */

export const pasarStringArreglo = (cadena, caracterDeSeparacion) => {
    let listaDePalabras = [];
    let palabra = [];

    for(let i=0; i != cadena.length + 1 ; i++){
        if (cadena[i] == caracterDeSeparacion || cadena[i] == undefined){
            listaDePalabras.push(palabra.join(""))
            palabra.splice(0, palabra.length);
        }else{
            palabra.push(cadena[i]);
        }
    }
    return listaDePalabras
}

