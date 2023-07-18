const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(require("./routes/index"));

server.use("*", (req, res) => {
  res.send("not found");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;