const connection = require("../config/db");

const getAllJokes = (req, res) => {
  connection.query("SELECT * FROM jokes", (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des blagues", err.message);
      return res.status(500).send("Erreur serveur");
    }
    res.json(results);
  });
};

const getJokeById = (req, res) => {
  const { id } = req.params;
  connection.qury("SELECT * FROM jokes WHERE id = ?", [id], (err, results) => {
    if (err) {
      console.error("Erreur lors de la récupération des blagues", err.message);
      return res.status(500).send("Erreur serveur");
    }
    if (results.length === 0) {
      return res.status(404).send("Blague non trouvée");
    }
    res.json(result[0]);
  });
};

const getRandomJoke = (req, res) => {
  connection.query(
    "SELECT * FROM jokes ORDER BY RAND() LIMIT 1",
    (err, results) => {
      if (err) {
        console.error(
          "Erreur lors de la récupération aléatoire de la blague",
          err.message
        );
        return res.status(500).send("Erreur serveur");
      }
      if (results.length === 0) {
        return res.status(404).send("Aucune blague trouvée");
      }
      res.json(results[0]);
    }
  );
};

const addJoke = (req, res) => {
  const { question, response } = req.body;
  if (!question || !response) {
    return res.status(400).send("Question/Réponse obligatoire");
  }

  const sql = "INSERT INTO jokes (question, response) VALUES (?, ?)";
  connection.query(sql, [question, response], (err, result) => {
    if (err) {
      console.error("Erreur lors de l'ajout de la blague", err.message);
      return res.status(500).send("Erreur serveur");
    }
    res.status(201).json({ id: result.insertId, question, response });
  });
};

module.exports = { getAllJokes, getJokeById, getRandomJoke, addJoke };
