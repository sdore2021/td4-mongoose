const express = require("express");
const router = express.Router();

const produit_controller = require("../controllers/produit.controller");

// une route pour tester seulement
router.get("/test", produit_controller.test);
router.get("/all", produit_controller.test_affiche);
router.post("/create", produit_controller.produit_create);
router.get("/:id", produit_controller.produit_details);
router.put("/:id", produit_controller.produit_update);
router.delete("/:id", produit_controller.produit_delete);

module.exports = router;
