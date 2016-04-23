var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('localhost/meanapp', ['meanapp']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

// methode get de http pour recuperer la liste des contacts

app.get('/meanapp', function (req, res) {
  console.log('I received a GET request');

  db.meanapp.find(function (err, docs) {
    console.log(docs);
    res.json(docs);
  });
});
// methode post de http pour ajouter un contact dans la liste des contacts

app.post('/meanapp', function (req, res) {
  console.log(req.body);

  db.meanapp.insert(req.body,
    function (err, doc)
    {
    res.json(doc);
    });
});
// methode delete de http pour supprimer un contact de la liste des contacts
app.delete('/meanapp/:id',function(req,res){
  var id = req.params.id;
  console.log(id);
  db.meanapp.remove({_id:mongojs.ObjectId(id)},
  function(err,doc)
  {
    res.json(doc);
  });
});

app.get('/meanapp/:id',function(req, res){
  var id = req.params.id;
  console.log(id);
  db.meanapp.findOne({_id:mongojs.ObjectId(id)},
  function(err,doc)
  {
    res.json(doc);
  });
});
app.put('/meanapp/:id',function(req, res){
  var id = req.params.id;
  console.log(req.body.nom);
  db.meanapp.findAndModify({
      query: {_id: mongojs.ObjectId(id)},
      update: {$set: {nom: req.body.nom,couleur: req.body.couleur, type: req.body.type,prix:req.body.prix}},
      new: true}, function (err, doc) {
        res.json(doc);
      }
    );
});

app.listen(3000);
console.log("Server running on port 3000");
