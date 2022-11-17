const mongoose = require("mongoose");

const newClassSchema = new mongoose.Schema({
    id: {
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
    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
        }
    ],
    classes:
        [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Class",
            }
        ],
    subjects:
    [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Subject",
        }
    ],
    contact:{
        type: String
    },
},{ versionKey: false, timestamps: true });

let NewClass = mongoose.model("NewClass", newClassSchema);
module.exports = { NewClass };