const express = require("express");
const helmet = require("helmet");

const examplesRouter = require("../examples/examples-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/examples", examplesRouter);

server.get("/", (req, res) => {
  res.status(200).json({ api: up });
});



module.exports = server;
