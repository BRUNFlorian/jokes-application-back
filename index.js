require("dotenv").config(); // Charge les variables d'environnement depuis .env

const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

// Utilisation du port défini par Render ou d'un port par défaut
const port = process.env.PORT || 3000; // Utilise process.env.PORT pour Render

app.use(cors());
app.use(express.json());

// Configuration de Swagger pour la documentation de l'API
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Blagues",
      version: "1.0.0",
      description: "Une API pour gérer des blagues façon Caramb*r",
    },
    servers: [
      {
        url: "https://jokes-application-back.onrender.com/api/v1", // URL de ton backend sur Render
        description: "Serveur de l'API",
      },
    ],
  },
  apis: ["./routes/*.js"], // Spécifie où trouver les définitions de l'API
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Route de test pour vérifier si le serveur fonctionne
app.get("/", (req, res) => {
  res.send("Le serveur Express fonctionne !");
});

// Intégration des routes pour gérer les blagues
app.use("/api/v1", jokeRoutes);

// Lancer le serveur Express sur le port défini
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
