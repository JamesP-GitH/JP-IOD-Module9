const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
    Controllers.postController.getPosts(req, res);
});

router.get("/:id", (req, res) => {
    Controllers.postController.getPost(req, res);
});

router.post("/create", (req, res) => {
    Controllers.postController.createPost(req.body, res);
});

router.put("/:id", (req, res) => {
    Controllers.postController.updatePost(req, res);
});

router.delete("/:id", (req, res) => {
    Controllers.postController.deletePost(req, res);
});

router.get("/:id/comments", (req, res) => {
    Controllers.postController.getPostComments(req, res);
});

router.get("/:id/likes", (req, res) => {
    Controllers.postController.getPostLikes(req, res);
});

module.exports = router;
