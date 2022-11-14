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

    get: async (req, res) => {
        try {
            const newPost = await Post.find();
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async(req, res) =>{
        try{
            const itemRemove = await Post.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch(error){
            res.status(500).json(error);
        }
    },
    updateByID: async (req, res) => {
        try {
            Post.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json("Update Successfully")
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = postController