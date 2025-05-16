const express = require("express");
const jokeController = require("../controllers/jokeController");
const router = express.Router();

router.get("/jokes", jokeController.getAllJokes);

router.get("/jokes/:id", jokeController.getJokeById);

router.get("/jokes/random", jokeController.getRandomJoke);

router.post("/jokes", jokeController.addJoke);

module.exports = router;
