const router = require("express").Router();
const {
    getUsers,
    getSingleUser,
    createUser,
    login
} = require("../../controllers/userController");
const { authMiddleware } = require("../../utils/auth");

router.route("/").get(getUsers).post(createUser);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

module.exports = router;