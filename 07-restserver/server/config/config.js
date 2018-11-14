//================================================
//  Puerto
//================================================
process.env.PORT = process.env.PORT || 3000;
//================================================
//  Entorno
//================================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
//================================================
//  Vencimiento del token
//================================================
process.env.CADUCIDAD_TOKEN = (60 * 60 * 24 * 30);
//================================================
//  SEED de autenticación
//================================================
process.env.SEED = process.env.SEED || 'Clave-secreta-0-s33d-desarrollo!';
//================================================
//  Base de datos
//================================================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
<<<<<<< HEAD
    urlDB = 'mongodb: //localhost:27017/cafe';
=======
    urlDB = 'mongodb://localhost:27017/cafe';
>>>>>>> 0c14faa1492c6db6b8ac8add4392e3a255a37627
} else {
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;