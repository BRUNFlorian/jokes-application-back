require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 3000;

// Crée une connexion MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Teste la connexion MySQL
connection.connect((err) => {
  if (err) {
    console.error("❌ Erreur de connexion à la base de données :", err.message);
    return;
  }
  console.log("✅ Connecté à la base de données MySQL !");
});

// Route de test
app.get("/", (req, res) => {
  res.send("Bonjour, ton serveur Express fonctionne !");
});

// Lancer le serveur Express
app.listen(port, () => {
  console.log(`🚀 Serveur démarré sur http://localhost:${port}`);
});
