const mysql = require("mysql2");
require("dotenv").config(); // Charge les variables d'environnement depuis .env

const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Utilise DB_HOST de ton .env
  user: process.env.DB_USER, // Utilise DB_USER de ton .env
  password: process.env.DB_PASSWORD, // Utilise DB_PASSWORD de ton .env
  database: process.env.DB_NAME, // Utilise DB_NAME de ton .env
  port: process.env.DB_PORT || 3306, // Utilise DB_PORT de ton .env, avec 3306 par défaut
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err.message);
    return;
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
