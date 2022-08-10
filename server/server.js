/* NPM PACKAGES */
const express = require("express");
const path = require("path");
const http = require("http");
const cors = require("cors");
//socket.io --- GOES HERE
const { Server } = require("socket.io");

/* CONNECTION TO FILES */
//const routes = require("./routes");
const sequelize = require("./config/connection");
//AUTH --- GOES HERE

/* DECLARATIONS */
const app = express();
const PORT = process.env.PORT || 3001;

/* MIDDLEWARE */
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(routes);

//socket.io --- DECLARATION (ON) GOES HERE
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});
io.on("connection", (socket) => {
    console.log(`User Connected: ${socket.id}`);
    
    socket.on("join_room", (data) => {
        socket.join(data);
        console.log(`User ${socket.id} joined room: ${data}`);
    });
    
    socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data);
    });
    
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
    server.listen(PORT, () => console.log(`LOCKED and LOADED on PORT ${PORT}`));
});