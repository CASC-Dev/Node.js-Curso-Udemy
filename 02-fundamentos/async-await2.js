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

let getEmpleado = async (id) => {
    let empleadoDB = empleados.find(empleado => empleado.id === id);
    //console.log(empleadoDB);
    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`);
    } else {
        return empleadoDB; 
    }
}

let getSalario = async (empleado) => {
    let salarioDB = salarios.find(salario => salario.id === empleado.id);

    if (!salarioDB) {
        throw new Error(`No se encontró un salario para el usuario ${empleado.nombre}`); //No importa cuántas veces se pong areject, sólo se dispara una vez, igual el resolve.
    } else {
        return {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        };
    }
}

let getInformacion = async (id) => {
    let empleado = await getEmpleado(id);
    let salario = await getSalario(empleado);
    
    return `${salario.nombre} tiene un salario de $${salario.salario}`;
}

getInformacion(10)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));