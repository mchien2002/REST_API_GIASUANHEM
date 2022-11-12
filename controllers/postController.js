const { Post } = require("../models/postModel");
const postController = {
    add: async (req, res) => {
        try {
        const newPost = new Post(req.body);
        const savePost = await newPost.save();
        res.status(200).json(savePost);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const newPost = await Post.find();
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = postController