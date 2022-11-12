const mongoose = require("mongoose");

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

let Subject = mongoose.model("Subject", subjectSchema);
module.exports = { Subject };