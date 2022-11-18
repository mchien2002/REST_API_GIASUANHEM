const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: { type: String, default: '' },
    body: { type: String, default: '' },
    style: { type: Number, default: 0 }
}, { versionKey: false, timestamps: true });

let Post = mongoose.model("Post", postSchema);
module.exports = { Post };
