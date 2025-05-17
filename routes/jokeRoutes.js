const express = require("express");

const router = express.Router();

const jokeController = require("../controllers/jokeController");

/**
 * @swagger
 * /jokes:
 *   get:
 *     summary: Récupère toutes les blagues
 *     responses:
 *       200:
 *         description: Liste des blagues
 */
router.get("/jokes", jokeController.getAllJokes);

/**
 * @swagger
 * /jokes/random:
 *   get:
 *     summary: Récupère une blague aléatoirement
 *     responses:
 *       200:
 *         description: Une blague aléatoire
 */
router.get("/jokes/random", jokeController.getRandomJoke);

/**
 * @swagger
 * /jokes/{id}:
 *   get:
 *     summary: Récupère une blague par son id
 *     responses:
 *       200:
 *         description: Blague sélectionnée par l'id
 */
router.get("/jokes/:id", jokeController.getJokeById);

/**
 * @swagger
 * /jokes:
 *   post:
 *     summary: Crée une nouvelle blague
 *     responses:
 *       200:
 *         description: Création d'une blague
 */
router.post("/jokes", jokeController.addJoke);

module.exports = router;
