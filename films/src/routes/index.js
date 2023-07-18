const { Router } = require("express");
const controllers = require("../controllers")
const router = Router();

router.get("/films", controllers.getFilms);


module.exports = router;
