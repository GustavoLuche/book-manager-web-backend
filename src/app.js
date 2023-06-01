const express = require("express");

const app = express();

// Middleware para tratar dados do corpo da requisição
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

module.exports = app;
