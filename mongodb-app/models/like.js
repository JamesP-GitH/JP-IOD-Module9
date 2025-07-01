const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post_id" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user_id" },
    liked_time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("like", likeSchema);
