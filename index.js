const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index', {
        autor : 'Daniel Honorato',
        gruppo : 'P',
        grado : '4',
        year : new Date().getFullYear(),
        title : 'Inicio'
    });
});

app.get('/Rene', (req, res)=>{
    res.render('Rene', {
        year : new Date().getFullYear(),
        title : 'René Magritte'
    });
});

app.get('/Paul', (req, res)=>{
    res.render('Paul', {
        year : new Date().getFullYear(),
        title : 'Paul Cezanne'
    });
});

app.get('/Marcel', (req, res)=>{
    res.render('Marcel', {
        year : new Date().getFullYear(),
        title : 'Marcel Duchamp',
    });
});
app.get('/Vincent', (req, res)=>{
    res.render('Vincent', {
        year : new Date().getFullYear(),
        title : 'Vincent Van Gogh',
    });
});

app.listen(3000, ()=>{
    console.log('Escuchar el puerto 3000');
});