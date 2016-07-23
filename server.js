// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var htmlRoutes = require('./routing/html-routes.js');
var ApiRoutes = require('./routing/api-routes.js');
var friends = require('./app/data/friends.js');



var app = express();

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

var htmlServing = new htmlRoutes();
var api = new ApiRoutes();


// serving up some sweet, sweet HTML
htmlServing.default(app, path);
htmlServing.survey(app, path);

//serving up some JSON
api.getApi(app, friends);''
api.postAPI(app, friends);

app.listen(process.env.PORT || 3030);