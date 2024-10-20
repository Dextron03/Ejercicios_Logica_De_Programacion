import {pasarStringArreglo} from "../../../Ejercicio_00/assets/js/primer_ej.js"

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo")
 devolverá "odnuM aloH". */

export const palabraAlReves = (cadena) => {
    let listaDeLetras = []
    let longitud = cadena.length

    for (let i = -1; i > -(cadena.length + 1); i--) {
        listaDeLetras.push(cadena.slice(i, longitud));
        longitud--;
    }

    return listaDeLetras.join("");
};

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo,
 pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

export const contadorDePalabras = (cadena, palabra) => {
    let listaDePalabras = pasarStringArreglo(cadena.toLowerCase(), " ");
    let contador = 0;
    
    for (const item of listaDePalabras) {
        if(item == palabra){
            contador += 1;
        }
    }
    return contador;
};


/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo
 (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. 
miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */