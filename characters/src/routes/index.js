const { Router } = require("express");
const controllers = require("../controllers")
const router = Router();

router.get("/characters", controllers.getCharacters);

module.exports = router;
