"use strict";
let Models = require("../models"); // matches index.js
const getUsers = (res) => {
    // finds all users
    Models.User.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUser = (req, res) => {
    Models.User.find({ _id: req.params.id })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateUser = (req, res) => {
    console.log(req.body);
    Models.User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createUser = (data, res) => {
    // creates a new user using JSON data POSTed in request body
    console.log(data);
    new Models.User(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteUser = (req, res) => {
    Models.User.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const getUserPosts = (req, res) => {
    // finds all posts for a given user and populates with user details
    Models.Post.find({ user_id: req.params.id })
        .populate({ path: "user" })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    getUserPosts,
    getUser,
};
