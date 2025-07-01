"use strict";
const Models = require("../models");

const getUsers = (res) => {
    Models.User.findAll({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUser = (req, res) => {
    const userId = req.params.id;
    Models.User.findByPk(userId)
        .then((user) => {
            if (!user) {
                return res.status(404).send({ result: 404, message: "User not found" });
            }
            res.send({ result: 200, data: user });
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const updateUser = (req, res) => {
    Models.User.update(req.body, { where: { id: req.params.id }, returning: true })
        .then((data) => {
            res.send({ result: 200, data: data });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const createUser = (data, res) => {
    Models.User.create(data)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteUser = (req, res) => {
    const userId = req.params.id;
    Models.User.destroy({ where: { id: req.params.id } })
        .then((deletedRows) => {
            if (deletedRows === 0) {
                return res.status(404).send({ result: 404, message: "User not found" });
            }
            res.send({ result: 200, message: "User deleted successfully" });
        })
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUserPosts = (req, res) => {
    const userId = req.params.id;
    Models.Post.findAll({
        where: { user_id: userId },
    })
        .then((posts) => res.send({ result: 200, data: posts }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const getUserComments = (req, res) => {
    const userId = req.params.id;
    Models.Comment.findAll({ where: { user_id: userId } })
        .then((comments) => res.send({ result: 200, data: comments }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

const getUserLikes = (req, res) => {
    const userId = req.params.id;
    Models.Like.findAll({ where: { user_id: userId } })
        .then((likes) => res.send({ result: 200, data: likes }))
        .catch((err) => {
            console.log(err);
            res.status(500).send({ result: 500, error: err.message });
        });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserPosts,
    getUser,
    getUserComments,
    getUserLikes,
};
