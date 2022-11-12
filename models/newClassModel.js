const mongoose = require("mongoose");

const newClassSchema = new mongoose.Schema({
    id:{
        type: Number
    },
    address: {
        type: String,
    },
    district: {
        type: String,
    },
    sobuoi: {
        type: Number,
    },
    time: {
        type: String,
    },
    salary: {
        type: Number,
    },
    require: {
        type: String,
    },
    status: {
        type: Number,
        required: true,
    },
    created_at: {
        type: String,
    },
    category: {
        type: [String]
    },
    classes:
    {
        type: [String]
    }
    ,
    subjects:
    {
        type: [String]
    }
    ,
});

let NewClass = mongoose.model("NewClass", newClassSchema);
module.exports = { NewClass };