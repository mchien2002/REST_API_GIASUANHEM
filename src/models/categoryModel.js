const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    style:{
        type: Number,
    }
}, { versionKey: false, timestamps: true })

let Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
