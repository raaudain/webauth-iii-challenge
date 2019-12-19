const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

const ApiRouter = require("./api-router"); 

server.use(helmet());
server.use(express.json());
server.use(cors());


server.use("/api", ApiRouter);

module.exports = server;