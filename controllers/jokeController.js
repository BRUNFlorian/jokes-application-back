const pool = require("../config/db");

// GET - Toutes les blagues
const getAllJokes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM jokes");
    res.json(rows);
  } catch (err) {
    console.error("Erreur lors de la récupération des blagues :", err.message);
    res.status(500).send("Erreur serveur");
  }
};

// GET - Blague par ID
const getJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT * FROM jokes WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).send("Blague non trouvée");
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Erreur lors de la récupération de la blague :", err.message);
    res.status(500).send("Erreur serveur");
  }
};

// GET - Blague aléatoire
const getRandomJoke = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM jokes ORDER BY RAND() LIMIT 1"
    );
    if (rows.length === 0) {
      return res.status(404).send("Aucune blague trouvée");
    }
    res.json(rows[0]);
  } catch (err) {
    console.error("Erreur lors de la récupération aléatoire :", err.message);
    res.status(500).send("Erreur serveur");
  }
};

// POST - Ajouter une blague
const addJoke = async (req, res) => {
  const { question, response } = req.body;
  if (!question || !response) {
    return res.status(400).send("Question/Réponse obligatoire");
  }

  try {
    const [result] = await pool.query(
      "INSERT INTO jokes (question, response) VALUES (?, ?)",
      [question, response]
    );
    res.status(201).json({ id: result.insertId, question, response });
  } catch (err) {
    console.error("Erreur lors de l'ajout de la blague :", err.message);
    res.status(500).send("Erreur serveur");
  }
};

module.exports = { getAllJokes, getJokeById, getRandomJoke, addJoke };
