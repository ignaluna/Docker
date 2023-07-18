const Mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();

const conn = Mongoose.createConnection(process.env.MONGO_URI);

const character = conn.model("character", require("./src/schemas/characterSchema"));
const planet = conn.model("planet", require("./src/schemas/planetSchema"));
const film = conn.model("film", require("./src/schemas/filmSchema"));

module.exports = {
  character,
  planet,
  film,
};