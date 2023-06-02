const Book = require("../models/Book");

class BookController {
  async list(req, res) {
    try {
      const books = await Book.findAll();
      res.json({ status: true, books });
    } catch (error) {
      console.error("Falha ao listar os livros:", error);
      res
        .status(500)
        .json({ status: false, message: "Não foi possível listar os livros" });
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      if (book) {
        res.json({ status: true, book });
      } else {
        res
          .status(404)
          .json({ status: false, message: "Livro não encontrado" });
      }
    } catch (error) {
      console.error("Falha ao buscar o livro:", error);
      res
        .status(500)
        .json({ status: false, message: "Não foi possível localizar o livro" });
    }
  }

  async create(req, res) {
    const { nome, autor, editora, ano } = req.body;
    try {
      const book = await Book.create({ nome, autor, editora, ano });
      res.json({ status: true, book });
    } catch (error) {
      console.error("Falha ao criar o livro:", error);
      res
        .status(500)
        .json({ status: false, message: "Falha ao criar o novo livro" });
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const { nome, autor, editora, ano } = req.body;
    try {
      const book = await Book.findByPk(id);
      if (book) {
        await book.update({ nome, autor, editora, ano });
        res.json({ status: true, book });
      } else {
        res
          .status(404)
          .json({ status: false, message: "Livro não encontrado" });
      }
    } catch (error) {
      console.error("Falha ao atualizar o livro:", error);
      res
        .status(500)
        .json({ status: false, message: "Falha ao atualizar o livro" });
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      const book = await Book.findByPk(id);
      if (book) {
        await book.destroy();
        res.json({ status: true, book });
      } else {
        res
          .status(404)
          .json({ status: false, message: "Livro não encontrado" });
      }
    } catch (error) {
      console.error("Falha ao excluir o livro:", error);
      res
        .status(500)
        .json({ status: false, message: "Falha ao excluir o livro" });
    }
  }
}

module.exports = new BookController();
