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

    getAll: async (req, res) => {
        try {
            const newItem = await Subject.find();
            res.status(200).json(newItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = subjectController;