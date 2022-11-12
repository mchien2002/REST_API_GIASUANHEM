const express = require("express");
const cors = require("cors");
const app = express();
var bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { response } = require("express");
const router = require("./routes/routes");

dotenv.config();

// CONNECT DATABASE 
mongoose.connect((process.env.MONGOOSE_URL), () => {
    console.log("CONNECTED MONGODB ......");
})
// PARSER THÀNH JSON VÀ GIỚI HẠN 
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// APP ROUTE
app.use("/giasuanhem/v1", router);


app.listen(8000, () => {
    console.log("#####################################################");
    console.log("Server is running...");
});
