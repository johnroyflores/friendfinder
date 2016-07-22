// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var PORT = 8080;
var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


//html routes
app.use('/', require('./app/routing/html-routes'));
app.use('/add', require('./app/routing/html-routes'));
app.use('/survey', require('./app/routing/html-routes'));

//api routes
app.use('/api/', require('./app/routing/api-routes'));


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function(){
    console.log('App listening on PORT ' + PORT);
})