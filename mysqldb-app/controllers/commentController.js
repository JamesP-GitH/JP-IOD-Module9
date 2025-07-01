"use strict";
const Models = require("../models");

// Get all comments
const getComments = (req, res) => {
    Models.Comment.findAll({})
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Get single comment by ID
const getComment = (req, res) => {
    const commentId = req.params.id;
    Models.Comment.findByPk(commentId)
        .then((comment) => {
            if (!comment) {
                return res.status(404).send({ result: 404, message: "Comment not found" });
            }
            res.send({ result: 200, data: comment });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Create new comment
const createComment = (data, res) => {
    Models.Comment.create(data)
        .then((comment) => res.send({ result: 200, data: comment }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Update comment by ID
const updateComment = (req, res) => {
    const commentId = req.params.id;
    const updateData = req.body;

    Models.Comment.update(updateData, { where: { comment_id: commentId } })
        .then(([affectedRows]) => {
            if (affectedRows === 0) {
                return res.status(404).send({ result: 404, message: "Comment not found or no changes made" });
            }
            res.send({ result: 200, message: "Comment updated successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Delete comment by ID
const deleteComment = (req, res) => {
    const commentId = req.params.id;
    Models.Comment.destroy({ where: { comment_id: commentId } })
        .then((deletedRows) => {
            if (deletedRows === 0) {
                return res.status(404).send({ result: 404, message: "Comment not found" });
            }
            res.send({ result: 200, message: "Comment deleted successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getComments,
    getComment,
    createComment,
    updateComment,
    deleteComment,
};
