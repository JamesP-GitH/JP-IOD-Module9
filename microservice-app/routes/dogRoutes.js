"use strict";
const express = require("express");
const router = express.Router();
const dogController = require("../controllers/dogController");

router.get("/random", (req, res) => {
    dogController.getRandomDogImage(req, res);
});
router.get("/breeds", (req, res) => {
    dogController.getAllBreeds(req, res);
});
router.get("/breed/:breed/random", (req, res) => {
    dogController.getRandomImageByBreed(req, res);
});
router.get("/images", (req, res) => {
    dogController.getMultipleImagesByBreed(req, res);
});

module.exports = router;
