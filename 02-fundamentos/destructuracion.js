let deadpool = {
    nombre: 'Wade Winston',
    apellido: 'Wilson',
    poder: 'Regeneración',
    getNombre: function() {
        return `${ this.nombre } ${ this.apellido } - poder: ${ this.poder }`
    }
};

//console.log(deadpool.getNombre());
//-----------------------------------------------------------------------------------
//let nombre = deadpool.nombre;
//let apellido = deadpool.apellido;
//let poder = deadpool.poder;
//-----------------------------------------------------------------------------------
/* Para evitar la asignación de variables anterior ^, podemos asignarle los valores de la siguiente manera: */
//let {nombre, apellido, poder} = deadpool //Destructuración
//console.log(nombre, apellido, poder);
//-----------------------------------------------------------------------------------
/* Para mandar llamar con otro nombre la variable del objeto Deadpool */
let { nombre: primerNombre, apellido, poder } = deadpool
console.log(primerNombre, apellido, poder);