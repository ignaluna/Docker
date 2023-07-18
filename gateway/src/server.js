const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");
const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
  })
);
server.use(
  "/films",
  createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
  })
);
server.use(
  "/planets",
  createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
  })
);

server.use("*", async (req, res) => {
  res.send("not found");
});

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).send({
      error: true,
      message: err.message,
  });
});

module.exports = server;