const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();

const dbConnectMongoDB = () => {
    mongoose.connect((process.env.MONGOOSE_URL), () => {
        console.log("######  CONNECTED MONGODB  ######")
    });
}

module.exports = dbConnectMongoDB;