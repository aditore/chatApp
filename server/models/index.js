const User = require("./User");
const Chats = require("./Chats");
const Message = require("./Message");

User.hasMany(Chats, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

User.hasMany(Message, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Chats.belongsTo(User, {
    foreignKey: "user_id",
});

Chats.hasMany(Message, {
    foreignKey: "chats_id",
    onDelete: "cascade"
});

Message.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

Message.belongsTo(Chats, {
    foreignKey: "chats_id",
    onDelete: "cascade"
});

module.exports = { User, Chats };