const User = require("./User");
const Chats = require("./Chats");

User.hasMany(Chats, {
    foreignKey: "user_id"
});

Chats.belongsTo(User, {
    foreignKey: "user_id",
    onDelete: "cascade"
});

module.exports = { User, Chats };