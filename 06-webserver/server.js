const express = require('express');
const app = express();
const hbs = require('hbs');

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'hbs'); //Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/', (req, res) => {
    //res.send('¡Hola, mundo!');
    /*let salida = {
        nombre: 'Carlos',
        edad: 32,
        url: req.url
    }*/
    res.render('home', {
        nombre: 'Carlos',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    //res.send('¡Hola, data!');
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en el puerto 3000');
});