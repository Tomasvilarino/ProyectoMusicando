var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController")


// Lista

router.get("/", cancionesController.lista);

// Una cancion

router.get("/:id", cancionesController.detalle)

// Crear

router.post("/" , cancionesController.crear);

// Editar

router.put("/:id", cancionesController.editar);

// Eliminar

router.delete("/:id", cancionesController.eliminar);

module.exports = router;
