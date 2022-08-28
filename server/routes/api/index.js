const router = require("express").Router();
const userRoutes = require("./userRoutes");
const chatsRoutes = require("./chatsRoutes");

router.use("/users", userRoutes);
router.use("/chats", chatsRoutes);

module.exports = router;