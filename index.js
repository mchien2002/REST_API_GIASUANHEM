const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { response } = require("express");
const router = require("./routes/routes");
const PORT = process.env.PORT || 3000;
var bodyParser = require("body-parser");
dotenv.config();

// CONNECT DATABASE 
mongoose.connect((process.env.MONGOOSE_URL), () => {
    console.log("#########################  CONNECTED MONGODB  #########################");
})
// PARSER THÀNH JSON VÀ GIỚI HẠN 
app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

// APP ROUTE
app.use((process.env.BASE_URL), router);

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(PORT, () => {
    console.log("#########################  SERVER IS RUNNING  #########################");
});