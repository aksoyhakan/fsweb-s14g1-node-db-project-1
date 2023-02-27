const express = require("express");
const accountRoutes = require("./accounts/accounts-router");

const server = express();

server.use(express.json());

server.use("/api/accounts", accountRoutes);

module.exports = server;
