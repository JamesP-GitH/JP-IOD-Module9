const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    post_id: { type: mongoose.Schema.Types.ObjectId, ref: "post_id" },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user_id" },
    comment_text: { type: String, trim: true, required: true },
    comment_time: { type: Date, default: Date.now },
});

module.exports = mongoose.model("comment", commentSchema);
