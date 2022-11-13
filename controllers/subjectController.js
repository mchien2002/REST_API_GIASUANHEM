const { Subject } = require("../models/subjectModel");
const subjectController = {
    add: async (req, res) => {
        try {
        const newItem = new Subject(req.body);
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    get: async (req, res) => {
        try {
            const list = await Subject.find();
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async(req, res) =>{
        try{
            const itemRemove = await Subject.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch(error){
            res.status(500).json(error);
        }
    }
}

module.exports = subjectController;