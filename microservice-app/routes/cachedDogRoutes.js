"use strict";
const express = require("express");
const router = express.Router();
const controller = require("../controllers/cachedDogController");

router.get("/", (req, res) => {
    controller.getCachedImages(req, res);
});

router.post("/", (req, res) => {
    controller.addImageToCache(req, res);
});

router.put("/:index", (req, res) => {
    controller.updateCachedImage(req, res);
});

router.delete("/:index", (req, res) => {
    controller.deleteCachedImage(req, res);
});

module.exports = router;
