const sequelize = require("../../config/connection");

const sync = async () => {
    
    await sequelize.sync({ force: true });

    console.log("Done!");
    
    process.exit(0);
};

sync();