// function sumar (a,b) {
//     return a+b;
// }

/* FUNCION FLECHA */

//Opción 1
// let sumar = (a,b) => {
//     return a + b;
// }

//Opción 2
// let sumar = (a, b) => a + b;

// console.log(sumar(10, 20));

/***********************************************************/

//Traducir:
// function saludar() {
//     return '¡Hola, mundo!';
// }

//Función flecha
//let saludar = () => '¡Hola, mundo!'; //Se escribe en una sóla línea cuando el return viene en una sóla línea también.

//Si lleva un sólo argumento
// function saludar(nombre) {
//     return `Hola, ${nombre}`;
// }

//En función tipo flecha:
// let saludar = nombre => `Hola, ${nombre}` //Se puede o no poner entre paréntesis el argumento, puede ser de las dos formas

// console.log(saludar('Carlos'));

let deadpool = {
    nombre: 'Wade Winston',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre() { //Esta es otra forma de declarar la función. Si uso el modo flecha, this va a apuntar a una variable fuera del objeto.
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

console.log(deadpool.getNombre());