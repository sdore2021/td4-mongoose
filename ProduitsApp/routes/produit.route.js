const express = require('express'); 
const router = express.Router();

const produit_controller = require('../controllers/produit.controller');

// une route pour tester seulement
router.get('/test',produit_controller.test);
router.post('/create',produit_controller.produit_create);
router.get('/:id',produit_controller.produit_details);
router.get('/affiche',produit_controller.produit_affiche_all);

module.exports = router;

