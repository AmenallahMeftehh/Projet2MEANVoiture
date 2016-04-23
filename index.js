var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('localhost/listvoiture', ['listvoiture']);
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

// methode get de http pour recuperer la liste des voitures

app.get('/listvoiture', function (req, res) {
    console.log('I received a GET request');

    db.listvoiture.find(function (err, docs) {
        console.log(docs);
        res.json(docs);
    });
});
// methode post de http pour ajouter une voiture dans la liste des voitures

app.post('/listvoiture', function (req, res) {
    console.log(req.body);

    db.listvoiture.insert(req.body
        , function (err, doc) {
            res.json(doc);
        });
});
//methode delete de http pour supprimer une voiture de la liste des voitures
app.delete('/listvoiture/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.listvoiture.remove({
            _id: mongojs.ObjectId(id)
        }
        , function (err, doc) {
            res.json(doc);
        });
});

app.get('/listvoiture/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    db.listvoiture.findOne({
            _id: mongojs.ObjectId(id)
        }
        , function (err, doc) {
            res.json(doc);
        });
});
app.put('/listvoiture/:id', function (req, res) {
    var id = req.params.id;
    console.log(req.body.nom);
    db.listvoiture.findAndModify({
        query: {
            _id: mongojs.ObjectId(id)
        }
        , update: {
            $set: {
                nom: req.body.nom
                , couleur: req.body.couleur
                , type: req.body.type
                , prix: req.body.prix
            }
        }
        , new: true
    }, function (err, doc) {
        res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");