const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    name: { type: String, required: true, default: '', }
}, { versionKey: false, timestamps: true })

let Class = mongoose.model("Class", classSchema);
module.exports = { Class };