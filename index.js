const appInit = require("./src/config/app.config")
const dbConnectMongoDB = require("./src/config/db.config");

appInit();
dbConnectMongoDB();

