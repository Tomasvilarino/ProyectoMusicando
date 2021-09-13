var generosController = require("../controllers/generosController");
router.use(express.json());


// Lista de generos

router.get("/", generosController.lista);
