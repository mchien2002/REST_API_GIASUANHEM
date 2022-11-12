const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,

    },
    body: {
        type: String,
    }
});

let Post = mongoose.model("Post", postSchema);
module.exports = { Post };
