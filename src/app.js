const express = require("express");

const app = express();

// Middleware para tratar dados do corpo da requisição
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

// Conecta ao banco de dados
const { connectToDatabase } = require("./config/database");
connectToDatabase();

// Rotas relacionadas aos livros
const bookRoutes = require('./routes/bookRoutes');
app.use("/books", bookRoutes);

module.exports = app;
