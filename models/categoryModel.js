const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    style:{
        type: Number,
    }
})

let Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
