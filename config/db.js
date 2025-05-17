const mysql = require("mysql2");
require("dotenv").config();  // Charge les variables d'environnement depuis .env

// Crée un pool de connexions à la base de données
const pool = mysql.createPool({
  host: process.env.DB_HOST,       // Hôte de la base de données
  user: process.env.DB_USER,       // Utilisateur de la base de données
  password: process.env.DB_PASSWORD, // Mot de passe de la base de données
  database: process.env.DB_NAME,   // Nom de la base de données
  port: process.env.DB_PORT || 3306, // Port de la base de données (3306 par défaut)
});

// Exporter le pool pour qu'il soit utilisé dans d'autres fichiers
module.exports = pool;
