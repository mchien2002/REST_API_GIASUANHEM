const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true, default: '', },
    style: { type: Number, default: 0, }
}, { versionKey: false, timestamps: true })

let Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
