const mysql = require("mysql2");
require("dotenv").config(); // Charge les variables d'environnement depuis .env

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST, // Utilise MYSQLHOST de Render
  user: process.env.MYSQLUSER, // Utilise MYSQLUSER de Render
  password: process.env.MYSQLPASSWORD, // Utilise MYSQLPASSWORD de Render
  database: process.env.MYSQL_DATABASE, // Utilise MYSQL_DATABASE de Render
  port: process.env.MYSQLPORT || 3306, // Utilise MYSQLPORT, avec 3306 par défaut
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err.message);
    return;
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
