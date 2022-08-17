const router = require("express").Router();
const {
    getAllChats,
    createChat
} = require("../../controllers/chatsController");

router.route("/").get(getAllChats).post(createChat);

module.exports = router;