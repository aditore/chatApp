const router = require("express").Router();
const {
    getSingleUser,
    createUser,
    login
} = require("../../controllers/userController");
const { authMiddleware } = require("../../utils/auth");

router.route("/").post(createUser);

router.route("/login").post(login);

router.route("/me").get(authMiddleware, getSingleUser);

module.exports = router;