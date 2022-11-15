
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");
const app = express();


function appInit(PORT, BASE_URL, router) {
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(cors());
    app.use(morgan("common"));
    app.use((BASE_URL), router);
    app.get('/', (req, res) => res.send('WELCOME TO GIASUANHEM!'));
    app.listen(PORT, () => {
        console.log("#########################  SERVER IS RUNNING  #########################");
    });
}

function dbConnectMongoDB(MONGOOSE_URL){
    mongoose.connect((MONGOOSE_URL), () => {
    console.log("#########################  CONNECTED MONGODB  #########################");
})
}

module.exports = {appInit, dbConnectMongoDB};