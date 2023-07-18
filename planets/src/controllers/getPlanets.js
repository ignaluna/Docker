const Planets = require("../data");
const { ClientError } = require("../../utils/errors");
const response = require("../../utils/response");
module.exports = async (req, res ) => {
    const planet = await Planets.list()
    if (!planet) throw new ClientError("no se pudo obtener la lista");
    return response(res, 200, planet);
}