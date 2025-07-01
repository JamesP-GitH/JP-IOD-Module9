"use strict";
const axios = require("axios");

const BASE_URL = "https://dog.ceo/api";

const getRandomDogImage = (req, res) => {
    axios
        .get(`${BASE_URL}/breeds/image/random`)
        .then((response) => res.json({ result: 200, data: response.data }))
        .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const getAllBreeds = (req, res) => {
    axios
        .get(`${BASE_URL}/breeds/list/all`)
        .then((response) => res.json({ result: 200, data: response.data }))
        .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const getRandomImageByBreed = (req, res) => {
    const breed = req.params.breed;
    axios
        .get(`${BASE_URL}/breed/${breed}/images/random`)
        .then((response) => res.json({ result: 200, data: response.data }))
        .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

const getMultipleImagesByBreed = (req, res) => {
    const breed = req.query.breed;
    const count = req.query.count || 3;

    if (!breed) {
        return res.status(400).json({ result: 400, error: "Breed query param is required" });
    }

    axios
        .get(`${BASE_URL}/breed/${breed}/images/random/${count}`)
        .then((response) => res.json({ result: 200, data: response.data }))
        .catch((err) => res.status(500).json({ result: 500, error: err.message }));
};

module.exports = {
    getRandomDogImage,
    getAllBreeds,
    getRandomImageByBreed,
    getMultipleImagesByBreed,
};
