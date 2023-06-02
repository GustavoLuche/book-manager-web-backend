const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Book = sequelize.define("Book", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  editora: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ano: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Sincroniza o modelo com o banco de dados
Book.sync()
  .then(() => console.log("Modelo Book sincronizado com o banco de dados"))
  .catch((error) =>
    console.error("Falha na sincronização do modelo Book:", error)
  );

module.exports = Book;
