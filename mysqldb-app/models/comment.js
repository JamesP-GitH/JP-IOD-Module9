const { Sequelize, DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Comment extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Comment.init(
    {
        comment_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        post_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        comment_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        sequelize: sequelizeInstance,
        modelName: "comments", // use lowercase plural format
        timestamps: true,
        freezeTableName: true,
    }
);
module.exports = Comment;
