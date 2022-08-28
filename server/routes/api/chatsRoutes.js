const router = require("express").Router();
const {
    getAllChats,
    createChat
} = require("../../controllers/chatsController");

router.route("/").post(createChat);
router.route("/:user_id").get(getAllChats);

module.exports = router;