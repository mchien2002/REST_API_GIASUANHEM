const { appInit, dbConnectMongoDB } = require("./app");
const router = require("./routes/routes");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 3000
dotenv.config();


appInit(PORT, process.env.BASE_URL, router);
dbConnectMongoDB(process.env.MONGOOSE_URL); 
