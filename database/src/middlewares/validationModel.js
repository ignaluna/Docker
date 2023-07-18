const { ClientError } = require("../../utils/errors");

module.exports = (req, res, next) => {
  const { model } = req.params;
  if (["character", "film", "planet"].includes(model)) {
    return next();
  } else {
    throw new ClientError("No existe ese modelo", 400);
  }
};