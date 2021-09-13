var express = require('express');
var router = express.Router();
var cancionesController = require("../controllers/cancionesController");
var generosController = require("../controllers/generosController");
router.use(express.json());

// Lista de generos

router.get("/generos", generosController.lista);

// Lista

router.get("/", cancionesController.lista);

// Una cancion

router.get("/:id", cancionesController.detalle);

// Crear

router.post("/" , cancionesController.crear);

// Editar

router.put("/:id", cancionesController.editar);

// Eliminar

router.delete("/:id", cancionesController.eliminar);


router.use(express.json());


module.exports = router;
