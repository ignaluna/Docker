const Films = require("../data");
const { ClientError } = require("../../utils/errors");
const response = require("../../utils/response");
module.exports = async (req, res) => {
    const film = await Films.list()
    if (!film) throw new ClientError("no se pudo obtener la lista");
    return response(res, 200, film);
};