"use strict";
const Models = require("../models");

// Get all likes
const getLikes = (req, res) => {
    Models.Like.findAll({})
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Get single like by ID
const getLike = (req, res) => {
    const likeId = req.params.id;
    Models.Like.findByPk(likeId)
        .then((like) => {
            if (!like) {
                return res.status(404).send({ result: 404, message: "Like not found" });
            }
            res.send({ result: 200, data: like });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Create new like
const createLike = (data, res) => {
    Models.Like.create(data)
        .then((like) => res.send({ result: 200, data: like }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Update like by ID
const updateLike = (req, res) => {
    const likeId = req.params.id;
    const updateData = req.body;

    Models.Like.update(updateData, { where: { like_id: likeId } })
        .then(([affectedRows]) => {
            if (affectedRows === 0) {
                return res.status(404).send({ result: 404, message: "Like not found or no changes made" });
            }
            res.send({ result: 200, message: "Like updated successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Delete like by ID
const deleteLike = (req, res) => {
    const likeId = req.params.id;
    Models.Like.destroy({ where: { like_id: likeId } })
        .then((deletedRows) => {
            if (deletedRows === 0) {
                return res.status(404).send({ result: 404, message: "Like not found" });
            }
            res.send({ result: 200, message: "Like deleted successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getLikes,
    getLike,
    createLike,
    updateLike,
    deleteLike,
};
