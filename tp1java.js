/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert("un mensaje");

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write("Hello World");

/* 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write("la suma de 5+3 es " + (5+3));
/* esta linea da el mismo resultado que arriba pero escribirlo de esta forma hace que no se tengan que poner tantas cosas para poder concatenar 
o hacer acciones: console.log(`la suma da ${5+3}`);

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = prompt("Como es su nombre?");
document.write(`Hola ${nombreUsuario}`);

/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt

let primerNumero = parseInt(prompt("Escriba el primer numero:"));
let segundoNumero = parseInt(prompt("Escriba un segundo numero:"));
alert("La suma de los dos numeros es: " + (primerNumero+segundoNumero));

/* 6.- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let numeroUno = parseInt(prompt("Ingrese un numero:"));
let numeroDos = parseInt(prompt("Ingrese otro numero:"));

if (numeroUno > numeroDos){
    document.write("El mayor de los dos numeros es: ", numeroUno);
    }
else{
    document.write("El mayor de los dos numeros es: ", numeroDos);
    }

/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
let numUno = parseInt(prompt("Ingrese el primer numero:"));
let numDos = parseInt(prompt("Ingrese el segundo numero:"));
let numTres = parseInt(prompt("Ingrese el tercer numero:"));
let maximo = 0;

if(numUno > numDos && numUno > numTres){
    maximo = numUno;
}
else{
    maximo = numTres;
    }
if(numDos > numUno && numDos > numTres){
    maximo = numDos;
    }
document.write(`El mayor numero entre los tres ingresados es: ${maximo}`);

/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
let numerito = parseInt(prompt("Ingrese un numero para saber si es divisible por 2:"));

if( numerito % 2 == 0){
    document.write(`El numero ${numerito} es divisible en 2`);
}
else{
    document.write("El numero ingresado no es divisible en 2");
}

/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
let frase = prompt("Ingrese una frase");
for(i=0; i<frase.length; i++){
    let vocal = frase.charAt(i);
    if(vocal == "a" || vocal == "e" || vocal == "i" || vocal == "o" || vocal == "u"){
        document.write(frase.charAt(i));
    }
}

/*10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
let numerit = parseInt(prompt("Ingrese un numero:"));

if(numerit % 2 == 0){
    document.write(`El numero ${numerit} es divisible por 2.`);
}
else if(numerit % 3 == 0){
    document.write(`El numero ${numerit} es divisible por 3.`);
}
else if(numerit % 5 == 0){
    document.write(`El numero ${numerit} es divisible por 5.`);
}
else if(numerit % 7 == 0){
    document.write(`El numero ${numerit} es divisible por 7.`);
}
else{
    document.write("No es divisible en ningun numero.")
}

/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
let num = parseInt(prompt("Ingrese un numero:"));

if(num % 2 == 0){
    document.write(`El numero ${num} es divisible por 2. `);
}
if(num % 3 == 0){
    document.write(`El numero ${num} es divisible por 3. `);
}
if(num % 5 == 0){
    document.write(`El numero ${num} es divisible por 5. `);
}
if(num % 7 == 0){
    document.write(`El numero ${num} es divisible por 7. `);
}
else{
    document.write("No es divisible en ningun numero.")
}*/