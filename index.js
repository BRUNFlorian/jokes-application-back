require("dotenv").config();

const express = require("express");
const cors = require("cors");
const jokeRoutes = require("./routes/jokeRoutes");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

// Route de test
app.get("/", (req, res) => {
  res.send("Le serveur Express fonctionne !");
});

// Intégration des routes
app.use("/api/v1", jokeRoutes);

// Lancer le serveur Express
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
