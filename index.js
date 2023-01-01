const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;


app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estaticos
app.use( express.static('public') )

app.get('/', (req, res) => {
    res.render('home', {
        titulo: "Ingeniero",
        nombre: "Santiago Triviño"
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: "Ingeniero",
        nombre: "Santiago Triviño"
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: "Ingeniero",
        nombre: "Santiago Triviño"
    });
});




app.listen(port, ()=>{
    console.log(`workin on the port =${port}`);
});

