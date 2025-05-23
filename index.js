const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

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
        url: "https://jokes-application-back.onrender.com/api/v1", // URL backend sur Render
        description: "Serveur de l'API",
      },
    ],
  },
  apis: ["./routes/*.js"], // chemin de tes fichiers de route
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes principales
app.get("/", (req, res) => res.send("Le serveur Express fonctionne !"));
// Intégration des routes
app.use("/api/v1", jokeRoutes); 

// Lancer le serveur Express
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
