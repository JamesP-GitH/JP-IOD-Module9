let express = require("express");
let router = express.Router();
let Controllers = require("../controllers");

router.get("/", (req, res) => {
    Controllers.likeController.getLikes(res);
});

router.post("/create", (req, res) => {
    Controllers.likeController.createLike(req.body, res);
});

router.put("/:id", (req, res) => {
    Controllers.likeController.updateLike(req, res);
});

router.delete("/:id", (req, res) => {
    Controllers.likeController.deleteLike(req, res);
});

module.exports = router;
