const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    body: {
        type: String,
    },
    style: {
        type: Number
    }
},{ versionKey: false, timestamps: true });

let Post = mongoose.model("Post", postSchema);
module.exports = { Post };
