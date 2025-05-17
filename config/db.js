const mysql = require("mysql2");
require("dotenv").config(); // Charge les variables d'environnement depuis .env

// Création de la connexion à la base de données
const connection = mysql.createConnection({
  host: process.env.MYSQLHOST, // Utilise MYSQLHOST fourni par Railway
  user: process.env.MYSQLUSER, // Utilise MYSQLUSER fourni par Railway
  password: process.env.MYSQLPASSWORD, // Utilise MYSQLPASSWORD fourni par Railway
  database: process.env.MYSQL_DATABASE, // Utilise MYSQL_DATABASE fourni par Railway
  port: process.env.MYSQLPORT || 3306, // Utilise MYSQLPORT (3306 par défaut pour MySQL)
});

// Tester la connexion à la base de données
connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err.message);
    return;
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
