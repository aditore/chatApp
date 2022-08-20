const { User, Chats } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
    //get all users
    async getUsers(req, res) {
        const getAll = await User.findAll({
            attributes: { exclude: ["password"] }
        });

        if (!getAll) {
            return res.status(500).json({ message: "Something went wrong!" });
        }

        res.status(200).json(getAll);
    },
    //get single user
    async getSingleUser({ user = null, params }, res) {
        const findUser = await User.findOne({
            attributes: { exclude: ["password"] },
            $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
            include: [{
                model: Chats,
                attributes: ["id", "title"]
            }]
        });

        if (!findUser) {
            return res.status(400).json({ message: "User cannot be found!"});
        }

        res.status(200).json(findUser);
    },
    //create user
    async createUser(req, res) {
        console.log(req.body);
        const user = await User.create(req.body);

        if (!user) {
            return res.status(400).json({ message: "Cannot create"});
        }

        const token = signToken(user);
        res.status(200).json({ token, user });
    },
    //login
    async login(req, res) {
        const userLogin = await User.findOne({
            where: {
                username: req.body.username
            }
        });

        if (!userLogin) {
            return res.status(400).json({ message: "Incorrect login credentials, please try again" });
        }

        const correctPassword = await userLogin.checkPassword(req.body.password);

        if (!correctPassword) {
            return res.status(400).json({ message: "Incorrect login credentials, please try again" });
        }

        const token = signToken(userLogin);
        res.json({ token, userLogin });
    }
};