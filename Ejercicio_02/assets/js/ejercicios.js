/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */
export const numeroAleatorio = () =>  {
    let numero =  Math.floor(Math.random() * (600 - 501) + 501);
    if (numero >= 501 && numero <= 600){
        return numero
    }else{
        return numero}

}; 

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */
const palabraAlReves = (cadena) => {
    let listaDeLetras = []
  let longitud = cadena.length

  for (let i = -1; i > -(cadena.length + 1); i--) {
    listaDeLetras.push(cadena.slice(i, longitud));
    longitud--;
  }

  return listaDeLetras.join("");
};

export const capicua = (numero) => {
    let numeroCapicua = palabraAlReves(numero)
    if(numero == numeroCapicua){
        return {isCapicua:true, numero:numeroCapicua};
    }else{
        return {isCapicua:false, numero};
    }
};

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n,
 se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) 
 devolverá 120. */

export const factorial = (numero) => {
    let suma = 1;
    for(let i = 1; i <= numero; i++){
        suma *= i ;
    }

    return suma;
}