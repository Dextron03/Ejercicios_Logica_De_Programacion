/*
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/
const palabraAlReves = (cadena) => {
    	let listaDeLetras = []
      let longitud = cadena.length

      for (let i = -1; i > -(cadena.length + 1); i--) {
        listaDeLetras.push(cadena.slice(i, longitud));
        longitud--;
      }

      return listaDeLetras.join("");
    };

    const capicua = (numero) => {
    let numeroCapicua = palabraAlReves(numero)
    if(numero == numeroCapicua){
      return {isCapicua:true, numero:numeroCapicua};
    }else{
      return {isCapicua:false, numero};
    }
  };

const {isCapicua, numero} = capicua("2002")
console.log(isCapicua);
console.log(numero);

 /*
 11) Programa una función que calcule el factorial de
  un número (El factorial de un entero positivo n,
  se define como el producto de todos los números
  enteros positivos de 1 hasta n), pe. miFuncion(5)
  devolverá 120.
*/


