const router = require("../routes/routes");
const express = require("express");
const app = express();
const logger = require('./logger.config');
const helmet = require("helmet")
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3000;
const BASE_URL = process.env.BASE_URL;

const appInit = () => {
    // app.use(helmet());
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(cors());
    app.use(morgan("common"));
    app.use((req, res, next) => {
        console.log("------------REQUEST------------");
        console.log(req.body);
        console.log("------------RESPONSE------------");
        let oldSend = res.send;
        res.send = function(data){
            console.log(data);
            oldSend.apply(res, arguments);
        }
        next();
    })
    app.use(BASE_URL, router);
    app.get('/', (req, res) => res.send('WELCOME TO GIASUANHEM!'));
    app.listen((PORT), () => {
        console.log("#########################  SERVER IS RUNNING  #########################");
    });
}

module.exports = appInit;

