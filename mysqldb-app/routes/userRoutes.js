const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

// matches GET requests sent to /api/users
// (the prefix from server.js)
router.get("/", (req, res) => {
    Controllers.userController.getUsers(res);
});
router.get("/:id", (req, res) => {
    Controllers.userController.getUser(req, res);
});

// matches POST requests sent to /api/users/create
router.post("/create", (req, res) => {
    Controllers.userController.createUser(req.body, res);
});

router.put("/:id", (req, res) => {
    Controllers.userController.updateUser(req, res);
});

router.delete("/:id", (req, res) => {
    Controllers.userController.deleteUser(req, res);
});

router.get("/:id/posts", (req, res) => {
    Controllers.userController.getUserPosts(req, res);
});
router.get("/:id/comments", (req, res) => {
    Controllers.userController.getUserComments(req, res);
});

router.get("/:id/likes", (req, res) => {
    Controllers.userController.getUserLikes(req, res);
});

module.exports = router;
