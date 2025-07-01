"use strict";
const Models = require("../models");

const getPosts = (req, res) => {
    Models.Post.findAll({})
        .then((data) => res.send({ result: 200, data }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const getPost = (req, res) => {
    const postId = req.params.id;
    Models.Post.findByPk(postId)
        .then((post) => {
            if (!post) {
                return res.status(404).send({ result: 404, message: "Post not found" });
            }
            res.send({ result: 200, data: post });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const createPost = (data, res) => {
    Models.Post.create(data)
        .then((post) => res.send({ result: 200, data: post }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const updatePost = (req, res) => {
    const postId = req.params.id;
    const updateData = req.body;

    Models.Post.update(updateData, { where: { post_id: postId } })
        .then(([affectedRows]) => {
            if (affectedRows === 0) {
                return res.status(404).send({ result: 404, message: "Post not found or no changes made" });
            }
            res.send({ result: 200, message: "Post updated successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const deletePost = (req, res) => {
    const postId = req.params.id;
    Models.Post.destroy({ where: { post_id: postId } })
        .then((deletedRows) => {
            if (deletedRows === 0) {
                return res.status(404).send({ result: 404, message: "Post not found" });
            }
            res.send({ result: 200, message: "Post deleted successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Get all comments on a post
const getPostComments = (req, res) => {
    const postId = req.params.id;
    Models.Comment.findAll({ where: { post_id: postId } })
        .then((comments) => res.send({ result: 200, data: comments }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

// Get all likes on a post
const getPostLikes = (req, res) => {
    const postId = req.params.id;
    Models.Like.findAll({ where: { post_id: postId } })
        .then((likes) => res.send({ result: 200, data: likes }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    getPostComments,
    getPostLikes,
};
