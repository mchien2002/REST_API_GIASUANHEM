const router = require("../routes/routes");
const express = require("express");
const app = express();
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
    app.use(BASE_URL, router);
    app.get('/', (req, res) => res.send('WELCOME TO GIASUANHEM!'));
    app.listen((PORT), () => {
        console.log("#########################  SERVER IS RUNNING  #########################");
    });
}

module.exports = appInit;

