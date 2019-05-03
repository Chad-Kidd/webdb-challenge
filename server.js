const express = require("express");
const helmet = require("helmet");

const projectRouter = require("./routers/project-router");
const actionRouter = require("./routers/action-router");

const server = express();

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionRouter);


server.get('/', (req, res) => {
  res.status(200).json({ hello: 'World!' });
});

module.exports = server;