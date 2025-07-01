const { Sequelize, DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;
class Like extends Model {}

// Sequelize will create this table if it doesn't exist on startup
Like.init(
    {
        like_id: {
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
        liked_time: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    },
    {
        sequelize: sequelizeInstance,
        modelName: "likes", // use lowercase plural format
        timestamps: true,
        freezeTableName: true,
    }
);
module.exports = Like;
