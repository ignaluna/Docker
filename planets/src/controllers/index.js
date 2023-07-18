const catchedAsync = require("../../utils/catchedAsync");

module.exports ={
    getPlanets: catchedAsync(require("./getPlanets")),
};