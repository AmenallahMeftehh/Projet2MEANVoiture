var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');
// creation de l'application
var app = express();
// Ajouter le Middleware necessaire pour l'API REST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));
// Connexion a MongoDB
mongoose.connect('mongodb://localhost/meanapp');
mongoose.connection.once('open',function(){
  console.log('listening on port 3000 ...');
  app.listen(3000);
});
