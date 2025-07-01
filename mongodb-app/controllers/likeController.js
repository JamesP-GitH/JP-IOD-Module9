"use strict";
let Models = require("../models");
const getLikes = (res) => {
    Models.Like.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createLike = (data, res) => {
    console.log(data);
    new Models.Like(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateLike = (req, res) => {
    console.log(req.body);
    Models.Like.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const deleteLike = (req, res) => {
    Models.Like.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

module.exports = {
    getLikes,
    createLike,
    updateLike,
    deleteLike,
};
