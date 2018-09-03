// var nombre = 'Wolverine';

// if (true) {
//     var nombre = 'Magneto';
// }

// var nombre = 'Wolverine1';
// var nombre = 'Wolverine2';
// var nombre = 'Wolverine3';
// var nombre = 'Wolverine4'; //Este va a ser el valor que se va a imprimir porque es el último valor asignado a la variable.

// console.log(nombre);

// let nombre = 'Wolverine'; //Una vez declarada con let, no se puede volver a inicializar

// if (true) { //La variable sólo es afectada en el scope donde es inicializada
//     let nombre = 'Magneto'; //Aunque aquí tenga el mismo nombre que la de afuera, apuntan a lugares de memoria diferentes.
// }

// console.log(nombre);

// for (var i = 0; i <= 5; i++) {
//     console.log(`i: ${i}`);
// }
// console.log(i); //Aquí imprime el último valor, que en el ejemplo, es el valor que ya no cumple con la condición de arriba

// for (let i = 0; i <= 5; i++) {
//     console.log(`i: ${i}`);
// }
// console.log(i); //Aquí tenemos error porque no existe en ningún lado del código.

// let i;
// for (let i = 0; i <= 5; i++) {
//     console.log(`i: ${i}`);
// }
// console.log(i); //Aquí, aunque está declarada, el valor es undefined porque no se le asignó otro valor en el scope.

let i = '¡Hola, mundo!';
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}
console.log(i); //Aquí, ya tiene valor y está en el scope de esta instrucción.