//Un callback es una función que se ejecuta una vez que algo más se realiza

// setTimeout(() => {
//     console.log('¡Hola, mundo!');
// }, 3000);

let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre : 'Fernando',
        id
    }

    if(id === 20) {
        callback(`El usuario con id ${id}, no existe en la base de datos.`)
    } else {
        callback(null, usuario); //Hay que verificar siempre que el primer argumento sea null o undefined en el caso de que avance en esta condición
    }
}

getUsuarioById(10, (err, usuario) => { // definimos como 1er argumento el error para saber su está o no
    if(err){
        return console.log(err);
    }
    console.log('Usuario de base de datos: ', usuario);
});