/**
 * Async Await
 */

 let getNombre = async() => { //Añadiendo async estamos creando una promesa
    //throw new Error ('No existe un nombre para ese usuario'); 
    return 'Carlos'; //Esto que regresa es el resolve
 };

 let saludo = async() => { 
    let nombre = await getNombre(); //Nos sirve para esperar a que se termine de ejecutar una función para continuar con el resto del proceso
    return `Hola, ${nombre}`;
 }

 getNombre().then(nombre => {
    console.log(nombre);
 }).catch(e => {
    console.log('Error de ASYNC', e);
 });