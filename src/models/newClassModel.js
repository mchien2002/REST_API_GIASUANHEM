const mongoose = require("mongoose");

const newClassSchema = new mongoose.Schema({
    id: { type: Number },
    address: { type: String, default: '', },
    district: { type: String, default: '', },
    sobuoi: { type: Number, default: 0, },
    time: { type: String, default: '', },
    salary: { type: Number, default: 0, },
    require: { type: String, default: '', },
    status: { type: Number, required: true, default: 0, },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category", }],
    classes: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class", }],
    subjects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Subject", }],
    contact: { type: String, default: '', },
}, { versionKey: false, timestamps: true });

let NewClass = mongoose.model("NewClass", newClassSchema);
module.exports = { NewClass };