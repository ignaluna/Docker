const { Router } = require("express");
const models = require("../../mongo");
const { validationModel } = require("../middlewares");
const route = Router();

route.get("/:model", validationModel, async (req, res) => {
  const { model } = req.params;
  const find = await models[model].list();
  return res.status(200).send(find);
});

module.exports = route;