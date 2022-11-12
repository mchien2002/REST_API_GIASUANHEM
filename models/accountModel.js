const mongoose = require("mongoose");

const accountScheme = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    passWord: {
        type: String,
        required: true,
    }
});

let Account = mongoose.model("Account", accountScheme);
module.exports = { Account };



