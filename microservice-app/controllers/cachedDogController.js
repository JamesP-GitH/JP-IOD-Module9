"use strict";
const axios = require("axios");
const dogCache = require("../models/dogCache");

const getCachedImages = async (req, res) => {
    try {
        if (dogCache.isEmpty()) {
            const response = await axios.get("https://dog.ceo/api/breeds/image/random/5");
            const images = response.data.message;
            images.forEach((url) => dogCache.add(url));
        }
        res.json({ result: 200, data: dogCache.getAll() });
    } catch (err) {
        console.error(err);
        res.status(500).json({ result: 500, error: err.message });
    }
};

const addImageToCache = (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "Missing image URL in request body" });

    const added = dogCache.add(url);
    res.json({ result: 200, message: "Image added to cache", data: added });
};

const updateCachedImage = (req, res) => {
    const index = parseInt(req.params.index);
    const { url } = req.body;

    const updated = dogCache.update(index, url);
    if (updated) {
        res.json({ result: 200, message: "Image updated", data: updated });
    } else {
        res.status(404).json({ result: 404, error: "Image not found at given index" });
    }
};

const deleteCachedImage = (req, res) => {
    const index = parseInt(req.params.index);

    const deleted = dogCache.remove(index);
    if (deleted) {
        res.json({ result: 200, message: "Image removed", data: deleted });
    } else {
        res.status(404).json({ result: 404, error: "Image not found at given index" });
    }
};

module.exports = {
    getCachedImages,
    addImageToCache,
    updateCachedImage,
    deleteCachedImage,
};
