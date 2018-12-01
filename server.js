
// require
const express       = require('express');
const bodyParser    = require('body-parser');
const countries     = require('./app/data/countries');

// variables
const portNumber    = 5000;
const app           = express();

// init variables

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// get api
app.get('/getCountries', (req, res) =>{
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(countries));
});

app.get('/getCountryByCode/:code', (req, res) =>{
    let code = req.params.code;
    let country = countries.find(c => c.code == code);
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(country));
});

// post api
app.post('/createCountry', (req, res) =>{
    let country = req.body;
    if(country){
        countries.push(country);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(country));
});

// listen
app.listen(portNumber, () =>{
    console.log('listen to port ' + portNumber);
});