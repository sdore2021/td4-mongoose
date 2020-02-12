const Produit = require('../models/produit.model');

// test
exports.test = function(req,res){
    res.send('Hello from de Test controller !');
}

exports.produit_create = function(req,res,next){
    let produit = new Produit({
        name : req.body.name,
        price : req.body.price
    });

    produit.save(function(err){
        if(err){
            return next(err);
        }
        res.send('Produit created');
    })
    res.send('Hello from de Test controller !');
}

exports.produit_details = function(req,res){
    Produit.findById(req.params.id,function(err,produit){
        if(err) return next(err);
        res.send(produit);
    })
    res.send('Hello from de Test controller !');
}

exports.produit_affiche_all = function(req,res){
    //res.send(Produit.find()); je veux affiher toute la base de donnée ici
    res.send('Hello from de Test controller !');
}
