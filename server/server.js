/* NPM PACKAGES */
const express = require("express");
const path = require("path");
//socket.io --- GOES HERE

/* CONNECTION TO FILES */
const sequelize = require("./config/connection");
//AUTH --- GOES HERE

/* DECLARATIONS */
const app = express();
const PORT = process.env.PORT || 3001;
//socket.io --- DECLARATION (ON) GOES HERE

/* MIDDLEWARE */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ---PRODUCTION BUILD
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
}

//HEROKU? BUILD CODE GOES HERE

/* ACTUAL SERVER :) */
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`LOCKED and LOADED on PORT ${PORT}`));
});