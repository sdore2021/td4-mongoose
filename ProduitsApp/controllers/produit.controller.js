const Produit = require("../models/produit.model");
//console.log(Produit);
// test
exports.test = function(req, res) {
  res.send("Hello from de Test controller !");
};

exports.produit_create = function(req, res, next) {
  let produit = new Produit({
    name: req.body.name,
    price: req.body.price
  });

  produit.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("Produit created");
  });
  res.send("Hello from de Test controller !");
};

exports.produit_details = function(req, res) {
  Produit.findById(req.params.id, function(err, produit) {
    if (err) return next(err);
    res.send(produit);
  });
};

exports.produit_details = function(req, res) {
  Produit.findById(req.params.id, function(err, produit) {
    if (err) return next(err);
    res.send(produit);
  });
};

exports.test_affiche = function(req, res) {
  Produit.find(function(err, produit) {
    if (err) return next(err);
    res.send(produit);
  });
};

exports.produit_update = function(req, res) {
  //console.log(req.body); // le contenu de mettre
  Produit.findByIdAndUpdate(req.params.id, req.body, function(err, post) {
    if (err) res.send(err);
    res.json(post);
  });
};

exports.produit_delete = function(req, res) {
  Produit.findByIdAndDelete(req.params.id, function(err, produit) {
    if (err) res.send(err);
    res.json(produit);
  });
};
