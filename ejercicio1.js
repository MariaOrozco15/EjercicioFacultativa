//5- Escribe una función que tome un arreglo como parámetro y devuelva el
//primer elemento del arreglo.

function PrimerElemento(array){
    return array [0];
}
//Pasar el arreglo que vamos a evaluar como parametro de la funcion, esto devolvera
//el primer elemento

const miarreglo= [10, 20, 30];
console.log(PrimerElemento(miarreglo));
//Se pasa como parametro la funcion PrimerElemento y devuelve el primer elemento
//del arreglo que es 10

//.
//

//Ejercicio 24- Escribe una función que tome dos números como parámetros y devuelva el
//resultado de la división del primero por el segundo.

function TomarParametro(x, y){ //Hacer una funcion con dos parametros
 var division = x/y //Formula de dividir esos dos parametros -Numeros-
 return division; //Returnar la variable global division
}
const x = 20 //Elegir valor para la constante x
const y = 10 //Elegir valor para la constante y

console.log(TomarParametro(x,y)); //Mandar a mostrar el resultado de la division
