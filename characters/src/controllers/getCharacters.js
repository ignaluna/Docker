const { ClientError } = require("../utils/errors");
const response = require("../utils/response");
const characters = require("../data");
module.exports = async (req, res) => {
  const characterList = await characters.list();
  if (!characterList) throw new ClientError("no se pudo obtener la lista");
  return response(res, 200, characterList);
};