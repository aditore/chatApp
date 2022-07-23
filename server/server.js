/* NPM PACKAGES */
const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
//socket.io --- GOES HERE
const { Server } = require("socket.io");

/* CONNECTION TO FILES */
const sequelize = require("./config/connection");
//AUTH --- GOES HERE

/* DECLARATIONS */
const app = express();
const PORT = process.env.PORT || 3001;
//socket.io --- DECLARATION (ON) GOES HERE
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

/* MIDDLEWARE */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("disconnect", () => {
        console.log("User Disconnect", socket.id);
    });
});

// ---PRODUCTION BUILD
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

//HEROKU? BUILD CODE GOES HERE

/* ACTUAL SERVER :) */
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`LOCKED and LOADED on PORT ${PORT}`));
});