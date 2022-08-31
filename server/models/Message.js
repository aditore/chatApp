const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Message extends Model {

}

Message.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "user",
                key: "id"
            }
        },
        chats_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "chats",
                key: "id"
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "message"
    }
);

module.exports = Message;