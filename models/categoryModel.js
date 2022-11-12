const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    style:{
        type: String,
    }
})

let Category = mongoose.model("Category", categorySchema);
module.exports = { Category };
