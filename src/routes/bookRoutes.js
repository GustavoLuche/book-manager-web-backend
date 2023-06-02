const express = require("express");
const bookController = require("../controllers/BookController");

const router = express.Router();

// Rota para listar todos os livros
router.get("/", bookController.list);

// Rota para buscar um livro pelo ID
router.get("/:id", bookController.getById);

// Rota para criar um novo livro
router.post("/", bookController.create);

// Rota para atualizar um livro
router.put("/:id", bookController.update);

// Rota para excluir um livro
router.delete("/:id", bookController.delete);

module.exports = router;
