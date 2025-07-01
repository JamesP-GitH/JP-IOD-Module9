const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: "user_id" },
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    image_url: { type: String, trim: true },
    post_time: { type: Date, default: Date.now },
});
module.exports = mongoose.model("post", postSchema);
