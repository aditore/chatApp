const User = require("./User");
const Chats = require("./Chats");

User.hasMany(Chats, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

Chats.belongsTo(User, {
    foreignKey: "user_id",
});

module.exports = { User, Chats };