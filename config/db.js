const mysql = require("mysql2");
require("dotenv").config(); // Charge les variables d'environnement depuis .env

const connection = mysql.createConnection({
  host: process.env.MYSQLHOST,
  user: process.env.MYSQLUSER,
  password: process.env.MYSQLPASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQLPORT || 3306,
});

connection.connect((err) => {
  if (err) {
    console.error("Erreur de connexion à MySQL :", err.message);
    return;
  }
  console.log("Connecté à la base de données MySQL !");
});

module.exports = connection;
