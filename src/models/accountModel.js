const mongoose = require("mongoose");

const accountScheme = new mongoose.Schema({
    name: { type: String, required: true, default: '', },
    userName: { type: String, required: true, default: '', },
    passWord: { type: String, required: true, default: '', }
}, { versionKey: false, timestamps: true }
);

let Account = mongoose.model("Account", accountScheme);
module.exports = { Account };



