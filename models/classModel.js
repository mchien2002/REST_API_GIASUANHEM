const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
},{ versionKey: false })

let Class = mongoose.model("Class", classSchema);
module.exports = { Class };