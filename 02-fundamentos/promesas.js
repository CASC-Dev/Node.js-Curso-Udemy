/** Las promesas nos permiten ejecutar un trabajo síncrono o asíncrono y después de que se realice la tarea, ejecutar un trabajo específico. */
let empleados = [{
    id: 1,
    nombre: 'Carlos'
}, {
    id: 2,
    nombre: 'Moni'
}, {
    id: 3,
    nombre: 'Ana Pau'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {
        let empleadoDB = empleados.find(empleado => empleado.id === id);
        //console.log(empleadoDB);
        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`);
        } else {
            resolve(empleadoDB); //Hay que tener cuidado de no llamar más de una vez el callback
        }
    });
}

let getSalario = (empleado) => {
    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => salario.id === empleado.id);

        if (!salarioDB) {
            reject(`No se encontró un salario para el usuario ${empleado.nombre}`); //No importa cuántas veces se pong areject, sólo se dispara una vez, igual el resolve.
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });
}

// getEmpleado(3).then(empleado => {
//     console.log('Empleado de BD ', empleado);
//     getSalario(empleado).then(resp => {
//         console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`);
//     }, (err) => {
//         console.log('Error: ', err);
//     });
// }, (err) => {
//     console.log('Error: ', err);
// });

//Esta es la sintaxis para escribir promesas encadenadas.
getEmpleado(3).then(empleado => {
    return getSalario(empleado);
}).then(resp => {
    console.log(`El salario de ${resp.nombre} es de $ ${resp.salario}`);
}).catch(err => {
    console.log(err);
});