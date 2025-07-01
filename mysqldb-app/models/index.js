"use strict";
const User = require("./user"); //require the model
const Post = require("./post");
const Comment = require("./comment");
const Like = require("./like");

User.hasMany(Post, { foreignKey: "user_id" });
Post.belongsTo(User, { foreignKey: "user_id" });

User.hasMany(Comment, { foreignKey: "user_id" });
Comment.belongsTo(User, { foreignKey: "user_id" });

Post.hasMany(Comment, { foreignKey: "post_id" });
Comment.belongsTo(Post, { foreignKey: "post_id" });

User.hasMany(Like, { foreignKey: "user_id" });
Like.belongsTo(User, { foreignKey: "user_id" });

Post.hasMany(Like, { foreignKey: "post_id" });
Like.belongsTo(Post, { foreignKey: "post_id" });

async function init() {
    await User.sync(); // sync the model
    // also sync any extra models here
    await Post.sync();
    await Comment.sync();
    await Like.sync();
}

init();

module.exports = {
    User, // export the model
    // also export any extra models here
    Post,
    Comment,
    Like,
};
