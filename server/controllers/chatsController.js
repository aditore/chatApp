const { Chats, User } = require("../models");

module.exports = {
    //get all chats by for user
    async getAllChats({ params }, res) {
        try {
            const allChats = await Chats.findAll({
                where: {
                    user_id: params.user_id
                },
                attributes: ["id", "title"],
                include: [{
                    model: User,
                    attributes: ["username", "id"]
                }]
            });

            res.status(200).json(allChats);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    //create chat
    async createChat(req, res) {
        console.log(req.body);
        try {
            const createChat = await Chats.create(req.body);

            if (!createChat) {
                return res.status(400).json({ message: "Cannot create" });
            }

            res.status(200).json(createChat);
        } catch (err) {
            res.status(500).json(err);
        }
    },
};