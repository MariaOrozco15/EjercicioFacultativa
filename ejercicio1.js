
//
//Ejercicio 1- Escribe una función que tome dos números como parámetros y devuelva la
//suma de ambos números.
const a = 40;
const b = 60;

var mifuncion = (a, b) => { //Hacemos la funcion con parametro
return a+b; //Returnar la suma de los dos parametros
}
console.log(mifuncion(a,b)) //El resultado de a + b = 100, por las costantes que añadimos que a=40 y b=100

//Ejercicio 2- Escribe una función que tome una cadena de texto como parámetro y
//devuelva la longitud de la cadena.

function MiFuncionLogitud(CadenaParametro){ //Hacemos la funcion con parametro
    return CadenaParametro.length; //Returnar la longitud con length
}
console.log(MiFuncionLogitud("Hola mundo")); //10


//Ejercicio 3- Escribe una función que tome un arreglo de números como parámetro y
//devuelva la suma de todos los elementos del arreglo.

function FuncionSuma(ArregloParametro){ //Hacer la funcion
    let Sum = 0; //Declar una variable e igualarla a 0 para que inicialice la suma
    for(let i = 0; i < ArregloParametro.length; i++){ //Hacer un ciclo for para que ese arreglo vaya contando
        Sum += ArregloParametro[i]; //Sumar el arreglo
    }
    return Sum; //Returnar la suma
}
var Arreglo = [50, 40, 30, 10]; //Declarar el arreglo almacenandolo.
console.log(FuncionSuma(Arreglo)); //130

//Ejercicio 4- Escribe una función que tome una cadena como parámetro y devuelva la
//cadena con las palabras en orden inverso.

var FuncionCadena =(ParametroInvertir)=>{ //Hacemos la funcion con parametro
    let Palabras = ParametroInvertir.split(" ") //el metodo split nos sirve para separar las palabras
    Palabras.reverse(); //El reverse nos ayuda a revertir las palabras.
    return Palabras.join(" "); //El join se encarga de unir las palabras nuevamente
}
console.log(FuncionCadena("Tu y yo")); //yo y Tu

//EJERCICIO ASIGNADO
//5- Escribe una función que tome un arreglo como parámetro y devuelva el
//primer elemento del arreglo.

function PrimerElemento(Arreglo){
    return Arreglo [0];
}
//Pasar el arreglo que vamos a evaluar como parametro de la funcion, esto devolvera
//el primer elemento

const miarreglo= [10, 20, 30];
console.log(PrimerElemento(miarreglo));
//Se pasa como parametro la funcion PrimerElemento y devuelve el primer elemento
//del arreglo que es 10

// Ejercicio 6- Escribe una función que tome un número como parámetro y devuelva true si
//el número es par, o false si es impar.

let FuncionParEImpar = (NumeroParEImpar) =>{ //Hacemos la funcion como parametro
 return NumeroParEImpar % 2 === 0; //Returnamos el parametro y hacemos la formula en el caso que sea par e impar
}
console.log(FuncionParEImpar(7)); //Es impar
console.log(FuncionParEImpar(4)); //Es par

//Ejercicio 7- Escribe una función que tome dos números como parámetros y devuelva el
//número mayor.

function NumeroMayor(Numero1, Numero2){
    if (Numero1 > Numero2 ) {
        return Numero1
    } else{
        return Numero2
    }
}
console.log(NumeroMayor(6,8)); //8
console.log(NumeroMayor(9,1)); //9

//Ejercicio 8- Escribe una función que tome una cadena como parámetro y devuelva true
//si la cadena es un palíndromo, es decir, si se lee igual de adelante hacia atrás
//que de atrás hacia adelante.

let FuncionPolindromo = (Cadena) => {
    Cadena = Cadena.toLowerCase().replace(/ /g, ""); //Convertimos la cadena a minúsculas y eliminamos los espacios en blanco
    let Invertir = Cadena.split("").reverse("").join(""); //Hacemos una nueva variable. Split para separar.
    return Cadena === Invertir; //compara la cadena original con la cadena invertida y devuelve true si son iguales
}
console.log(FuncionPolindromo("Oso")); //True
console.log(FuncionPolindromo("Hola")); //False

//Ejercicio 9- Escribe una función que tome un arreglo como parámetro y devuelva el
//número de elementos en el arreglo.

var FuncionArreglo = (ParametroArreglo) =>{

return Arreglo.length
}
var Arreglo = [70, 60, 50, 5]; //Declarar el arreglo almacenandolo.
console.log(FuncionArreglo(Arreglo));

//Ejercicio 10- Escribe una función que tome un número como parámetro y devuelva true si
//el número es positivo, o false si es negativo.

var FuncionPostivoNegativo = (Numero) =>{
    return Numero >= 0; 
}
console.log(FuncionPostivoNegativo(2)); //True
console.log(FuncionPostivoNegativo(-2)); //False

//Ejercicio 11- Escribe una función que tome dos cadenas de texto como parámetros y
//devuelva la concatenación de ambas cadenas.

var Concatenar = (Cadena1, Cadena2) =>{ //Hacer una funcion con dos parametros como cadena
    return Cadena1 + Cadena2; //Concatenar, para ajuntar las palabras
}
console.log(Concatenar("Helado", "Rocio")); //HeladoRocio

//  Ejercicio 12- Escribe una función que tome un arreglo como parámetro y devuelva el último
//elemento del arreglo.

function UltimoElemento(ParametroArreglo){
    return Arreglo [Arreglo.length -1];
}
var Arreglo = [1, 2, 4, 6, 8];
console.log(UltimoElemento(Arreglo)); //8

//Ejercicio 13- Escribe una función que tome una cadena de texto como parámetro y
//devuelva true si la cadena contiene la letra "a", o false si no la contiene.

var FuncionDevolver= (CadenaParametro) =>{
    return CadenaParametro.includes("a") || CadenaParametro.includes("A");
}
console.log(FuncionDevolver("Maestro")); //True

//Ejercicio 14- Escribe una función que tome dos cadenas como parámetros y devuelva true
//si ambas cadenas son anagramas, es decir, si tienen las mismas letras en
//un orden diferente.

var FuncionAnagrama = (Cadenas1, Cadenas2) => {
    let palabra1 = Cadenas1.split("").sort(); //Hacemos que los parametros tengan el metodo split para separar y el sort para ordenarlo
    let palabra2 = Cadenas2.split("").sort();

    return palabra1.join("") === palabra2.join(""); // Usamos el metodo Join para unir las palabras
}
console.log(FuncionAnagrama("alis", "sila")); //true
console.log(FuncionAnagrama("liro", "lira")); //false


//Ejercicio 15- Escribe una función que tome un arreglo de números como parámetro y
//devuelva la suma de todos los números en el arreglo.

function Sumar(MiArreglo) {
    let sumar = 0;
    for (let i = 0; i < MiArreglo.length; i++) {
      sumar += MiArreglo[i];
    }
    return sumar;
  }
    let Arreglo = [20, 20, 10, 10, 10];
    let suma = Sumar(Arreglo);
    console.log(suma); // Salida: 70


//Ejercicio 16- Escribe una función que tome dos números como parámetros y devuelva el
//número menor.

function NumeroMenor(Numero1, Numero2){
    if (Numero1 < Numero2 ) {
        return Numero1
    } else{
        return Numero2
    }
}
console.log(NumeroMenor(6,8)); //6
console.log(NumeroMenor(9,1)); //1

//Ejercicio 17- Escribe una función que tome una cadena de texto como parámetro y
//devuelva la cadena en mayúsculas.
    
function CadenaMayuscula(CadenaParametro){ 
    return CadenaParametro.toUpperCase(); //El toupperCase hace que las cadenas se vuelvan en mayuscula
}
console.log(CadenaMayuscula("mariana")); //MARIANA

//Ejercicio 18- Escribe una función que tome una cadena de texto como parámetro y
//devuelva la cadena en minúsculas.
var funcionMinuscula = (CadenaParametro) => {
    return CadenaParametro.toLowerCase(); //El toLowerCase pasa las palabras a minusculas.
}
console.log(funcionMinuscula("TE AMO")); //te amo

//Ejercicio 19.Escribe una función que tome un número como parámetro y devuelva true si
//el número es divisible por 3 y 5, o false si no lo es.

var DivisiblePorTresYCinco = (ParametroDivisible) => {
    return ParametroDivisible % 3 === 0 && ParametroDivisible % 5 === 0
}
console.log(DivisiblePorTresYCinco(30)); //true

//Ejercicio 20.Escribe una función que tome un arreglo como parámetro y devuelva una
//copia del arreglo invertido.

function ArregloInvertido(ArregloParametro){
    return Arreglo.slice().reverse(); //Slice que sirve para hacer una copia del arreglo original y revertirlo con reverce
}
var Arreglo = [10, 20, 4] //Crea el arreglo llenandolo.
console.log(ArregloInvertido(Arreglo)); // [4, 20, 10]

//Ejercicio 21.Escribe una función que tome un arreglo como parámetro y devuelva el último
//elemento del arreglo.

//NOTA: ESTE ES EL MISMO QUE EL EJERCICIO 12

//Ejercicio 22.Escribe una función que tome un número como parámetro y devuelva el cubo
//de su valor si el número es negativo, o el doble del valor si no lo es.

var TomarUnNumero = (Numero) =>{ //Crear funcion con su parametro
    if (Numero < 0) { // Hacer una condicion
        return Numero ** 3; //Si es menor elevarlo al cubo
    }else{
        return Numero * 2; //Si es mayor multiplicarlo por dos
    }
}
console.log(TomarUnNumero(-2)) //-8
console.log(TomarUnNumero(2)) //4

//Ejercicio 23- Escribe una función que tome una cadena como parámetro y devuelva la
//cadena en orden inverso. Debe emplear el ciclo for.

function TomarCadena(Cadena) {
    let CadenaInvertida = '';
    for (let i = Cadena.length - 1; i >= 0; i--) {
        CadenaInvertida += Cadena[i];
    }
    return CadenaInvertida;
  }
    
    console.log(TomarCadena("Hola")); // Salida: aloH


//Ejercicio 24- Escribe una función que tome dos números como parámetros y devuelva el
//resultado de la división del primero por el segundo.

function TomarParametro(x, y){ //Hacer una funcion con dos parametros
 var division = x/y //Formula de dividir esos dos parametros -Numeros-
 return division; //Returnar la variable global division
}
const x = 20 //Elegir valor para la constante x
const y = 10 //Elegir valor para la constante y

console.log(TomarParametro(x,y)); // 2 Mandar a mostrar el resultado de la division

//Ejercicio 25.Escribe una función que tome tres números como parámetros y devuelva el
//resultado de la suma de los dos primeros, multiplicado por el tercero.

var SumaMultiplicacion = (Numero1, Numero2, Numero3) => {
    return (Numero1 + Numero2) * Numero3;
}
console.log(SumaMultiplicacion(2, 3, 2)) //10

//Ejercicio 26.Escribe una función que tome cuatro números como parámetros y devuelva
//el resultado de la resta del primer número por el segundo, multiplicado por la
//división del tercer número entre el cuarto.

function MiFuncion(Numero1, Numero2, Numero3, Numero4){
    return (Numero1 - Numero2) * (Numero3/Numero4);
}
console.log(MiFuncion(5, 2, 3, 4)) //2.25

//Ejercicio 27.Escribe una función que tome dos números y un booleano como parámetros.
//Si el booleano es verdadero, la función debe devolver la multiplicación de los
//dos números; de lo contrario, debe devolver su diferencia.

var FuncionBooleano = (Numero1, Numero2, Bandera) =>{
    if (Bandera) {
        return Numero1 * Numero2;
        
    } else{
        return Numero1 - Numero2;
    }
}
console.log(FuncionBooleano(1, 3, true)); //3
console.log(FuncionBooleano(5, 3, false)); //2

//Ejercicio 28.Escribe una función que tome tres parámetros booleanos y devuelva
//verdadero si al menos uno de los tres parámetros es verdadero, de lo
//contrario, debe devolver falso.

var FuncionBooleano = (Booleano1, Booleano2, Booleano3) => {
    return Booleano1 || Booleano2 || Booleano3;
}
console.log(FuncionBooleano(true, true, false)); // true
console.log(FuncionBooleano(false, false, false)); //false
console.log(FuncionBooleano(true, false, false)); //true

//Ejercicio 29.Escribe una función que tome dos parámetros numéricos y un parámetro
//booleano. Si el tercer parámetro es verdadero, la función debe devolver el
//resultado de elevar el primer parámetro a la potencia del segundo parámetro,
//de lo contrario, debe devolver la raíz cuadrada del primer parámetro.

var BooleanoFuncion = (Numero1, Numero2, Booleano) => {
    if (Booleano) {
        return Math.pow(Numero1, Numero2); // elevar el primer numero a la potencia del numero dos
      } else {
        return Math.sqrt(Numero1); // devuelve la raíz cuadrada del primer numero
      }
}
console.log(BooleanoFuncion(3, 4, true)); //81
console.log(BooleanoFuncion(3, 4.6, false)); //1.7320

//Ejercicio 30.Escribe una función que tome un arreglo de strings como parámetro y
//devuelva un nuevo arreglo con todas las palabras en minúscula.

var FuncionArreglo = (CadenaParametro) => {
    var MiArreglo = [];
    for (var i = 0; i < CadenaParametro.length; i++) {
        MiArreglo.push(CadenaParametro[i].toLowerCase()); // convierte cada elemento a minúsculas y lo agrega al nuevo arreglo
    }
    return MiArreglo;
  }
console.log(FuncionArreglo(["HOLA MUNDO"])); //hola mundo

//Ejercicio 31.Escribe una función en JavaScript que reciba un arreglo de números y retorne
//el promedio de todos los elementos del arreglo.

var Promedio = (MiArreglo) => { //toma como argumento un arreglo de números.
    let suma = 0; //Declaramos una constante suma para inicializar la suma que se inicializa en cero
    for(let i = 0; i < MiArreglo.length; i++) { //recorrer todos los elementos del arreglo.
      suma += MiArreglo[i]; 
    }
    return suma / MiArreglo.length; //Se suma y se divide con el arreglo
  }
  
  console.log(Promedio([3, 6, 8, 10])); //6.75

//Ejercicio 32.Dado un arreglo de números, escribe una función que devuelva la suma de
//todos los números pares. Si el arreglo está vacío o no contiene números
//pares, la función deberá devolver 0.

function DevolverSumaSiEsPar (Numeros) {
    let suma = 0; //Inicializamos la suma
    for (let i = 0; i < Numeros.length; i++) {
        if (Numeros[i] % 2 === 0) { //si es par
            suma += Numeros[i]; //Sumarlo si no mandar 0
        }
    }
    return suma
}
console.log(DevolverSumaSiEsPar([])); //0
console.log(DevolverSumaSiEsPar([4, 4, 4])); //12