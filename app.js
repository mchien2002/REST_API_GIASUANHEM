
const express = require("express");

function appInit(PORT, BASE_URL, router) {
    const app = express();
    app.use(bodyParser.json({ limit: "50mb" }));
    app.use(cors());
    app.use(morgan("common"));
    app.use((BASE_URL), router);
    app.get('/', (req, res) => res.send('WELCOME TO GIASUANHEM!'));
    app.listen(PORT, () => {
        console.log("#########################  SERVER IS RUNNING  #########################");
    });
}

function dbConnectMongoDB(){
    
}

module.exports = appInit;