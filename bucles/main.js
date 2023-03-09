//1 Tabla de un número con sus primeros 10 multiplos
function tablaMultiplicar(numero){
    for(i=1;i<=10;i++){
        let multiplicacion= numero*i;
        console.log(numero+" * "+i+" = "+multiplicacion);
    }
}

let num= prompt("Ingrese un número");
tablaMultiplicar(parseFloat(num))

//2 Función que recibe números por pantalla y los va acumulando siempre y cuando dicho número no sea cero
function acumularNumeros(){
    let numero;
    let acumulado=0;
do{
    numero=prompt("Ingrese un número");
    acumulado+=parseInt(numero);
    //console.log(acumulado);
}while(parseInt(numero)!=0);

return acumulado;
}

/*3 Función que permite al usuario ingresar números para adivinar el número acumulado de la función anterior, 
le indica si el número ingresado es mayor, menor o igual*/
//Variable global para ser utilizada en la función adivinarNumero
var numeroAdivinar=acumularNumeros();
console.log(numeroAdivinar)

function adivinarNumero(){
    //let numeroAdivinar=acumularNumeros();
    console.log(numeroAdivinar, "esta es adivinar")
    bandera=false;
     let numeroCorrecto;
     while(!bandera){
        numero=prompt("Ingrese un número para adivinar el valor de la función");
        numero=parseInt(numero);
        if(numero<numeroAdivinar){
            alert("El número a adivinar es mayor a: " +numero);
        }else if(numero>numeroAdivinar){
            alert("El número a adivinar es menor a: " +numero);
        }else {
            alert("¡Felicidades adivino el número!: " +numero);
            bandera=true;
        }
     }
}
adivinarNumero()
//4 Función que recibe un número y evalua si es primo
function numeroPrimo(numero){
    let divisores=[];
    for(i=1; i<=numero/2;i++){
        if(numero%i==0){
            divisores.push(i);
        }else{
            continue;
        }
    }
    if(numero==1 || divisores.length>1){
        return numero+" no es número primo";
    }else{
        return numero+" es número primo";
    }
}
let primo=numeroPrimo(10);
console.log(primo);

//5 Función que recibe un número y retorna sus divisores
function divisores(numero){
    let divisores=[];
    for(i=1; i<=numero;i++){
        if(numero%i==0){
            divisores.push(i);
        }else{
            continue;
        }
    }
    return divisores;
}
let numDivisores=  divisores(10);
console.log(numDivisores);

//6 Recibe array y muestra por consola sus elementos
function mensajeConsola(array){
    for(i=0; i<array.length;i++){
        console.log("En la posición "+ i+ " se encuentra el elemento " +array[i]);
    }
}
let arrayConsola=[1,2,3,4,5,6,7,8,9,10];
mensajeConsola(arrayConsola);
//7 Función que recibe un array y muestra el doble de cada uno de los elementos
function numDobleConsola(array){
    for(i=0; i<array.length;i++){
        console.log("En doble de "+ array[i]+ " es " +array[i]*2);
    }
}
let arrayParaDobles=[2,4,3,6,8,10,12,14,16,18,20];
numDobleConsola(arrayParaDobles);

/*8 Función que recibe una lista de objetos compuesta por 5 elementos que representa 
miembros de familia y muestra por consola la presentación de cada uno*/
function familiaPresentacion(listaObjetos){
    for(let persona of listaObjetos){
        console.log("-----Presentacion integrante--------");
        for(let propiedad in persona){
            console.log(propiedad + " "+ persona[propiedad]);
        }
    }
}
let familia=[{  nombre: "Manuel",
                apellido:"Casas",
                edad: "45",
                profesion: "Administrador de empresas",
            },
            {
                nombre: "Lina",
                apellido:"Ortíz",
                edad: "43",
                profesion: "Ingenieía industrial",
            },
            {
                nombre: "Carlos",
                apellido:"Casas",
                edad: "8",
                pasatiempo: "Jugar basketball",
            },
            {
                nombre: "Maria",
                apellido:"Casas",
                edad: "8",
                pasatiempo: "Ballet",
            },
            {
                nombre: "Juliana",
                apellido:"Casas",
                edad: "12",
                pasatiempo: "Pintar",
            },
];
familiaPresentacion(familia);
//9 Función que recibe un array y muestra por consola los números impares
function numerosImpares(array){
    for(let i=0; i<array.length;i++){
        if(array[i]%2!=0){
            console.log(array[i]);
        }else{
            continue;
        }
    }
}
let arrayParaImpares=[3,5,20,43,52,6,77,90,33,10];
numerosImpares(arrayParaImpares);
//10 Función que permite que se ingrese por pantalla números que no sean el cero y suma los pares y los imapares
function sumaParesImpares(){
    let numero;
    let sumaPares=0;
    let sumaImpares=0;
do{
    numero=prompt("Ingrese un número");
    numero=parseInt(numero);
    if(numero%2==0){
        sumaPares+=numero;
    }else{
        sumaImpares+=numero;
    }
    console.log("La suma de los pares es: " +sumaPares);
    console.log("La suma de los impares es: "+sumaImpares);
}while(numero!=0);
}
sumaParesImpares();
//11 Función que recibe un array de 10 numeros y muestra por pantalla el número más grande
function numeroMasGrande(array){
    let mayor=array[0];
    for(let i=1; i<array.length;i++){
        if(mayor<array[i]){
            mayor=array[i];
        }
    }
    alert("El número más grande del array es: "+ mayor);
}

let arrayParaNumeroMasGrande=[1,2,3,4,5,6,70,8,9,10];
numeroMasGrande(arrayParaNumeroMasGrande);
//12 Función que recibe un array de 10 numeros y muestra por pantalla el número más pequeño
function numeroMasPequeño(array){
    let menor=array[0];
    for(let i=1; i<array.length;i++){
        if(menor>array[i]){
            menor=array[i];
        }
    }
    alert("El número más pequeño del array es: "+ menor);
}

let arrayParanumeroMasPequeño=[0,23,3,4,5,-6,0,8,9,10];
numeroMasPequeño(arrayParanumeroMasPequeño);
/*13 Función que permite ingresar por pantalla el nombre de 2 jugadores para que puedan ingresar sus elecciones
 en el juego piedra, papel o tijera hasta concluir un ganador*/
function piedraPapelTijera(){
    let jugador1=prompt("Ingrese su nombre jugador 1");
    let jugador2=prompt("Ingrese su nombre jugador 2");
    let bandera=false;
    while(!bandera){
        let jugador1Ele=prompt(jugador1+" Ingrese piedra, papel o tijera");
        let jugador2Ele=prompt(jugador2+" Ingrese piedra, papel o tijera");
        if((jugador1Ele==="piedra" && jugador2Ele==="tijera") || (jugador1Ele==="tijera" && jugador2Ele==="papel")|| (jugador1Ele==="papel" && jugador2Ele==="piedra")){
            alert("El ganador es "+ jugador1);
            console.log("El ganador es el jugador 1");
            bandera=true;
        }else if(jugador1Ele===jugador2Ele){

            console.log("El juego continua");
        }else{
            alert("El ganador es "+ jugador2);
            console.log("El ganador es el jugador 2");
            bandera=true;
        }
    }
}
piedraPapelTijera();

//14 Función que imprime por consola un triángulo de asteriscos de 5 lados 
function trianguloCinco(){
    let resultado;
    for(let i=1; i<=5; i++){
         resultado='';
        for(let j=1;j<=i;j++){
            resultado+='* ';
        }
        console.log(resultado);
    }
}

trianguloCinco();

//15 Función que imprime por consola un triángulo invertido de asteriscos de 5 lados 
function trianguloinvertido(){
    let resultado;
    for(let i=5; i>=1; i--){
         resultado='';
        for(let j=1;j<=i;j++){
            resultado+='* ';
        }
        console.log(resultado);
    }
}
console.log("triangulo inver")
trianguloinvertido()
//16 Función que recibe un array de números y los ordena
function ordenarArray(array){
    for(let i=0; i<array.length-1;i++){
        let menor=array[i];
        let posMenor=i;
        for(let j=i+1; j<array.length;j++){
            let actual=array[j];
            if(actual<menor){
                menor=actual;
                posMenor=j;
            }
        }
        let temp=array[i]
        array[i]=menor;
        array[posMenor]=temp;
    }
    alert("El array ordenado es:" +array);
    return array;
}
let arrayOrdenar=[0,23,3,4,5,-6,0,8,9,10];
let ordenar=ordenarArray(arrayOrdenar);
console.log(ordenar);