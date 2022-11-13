const { Tutor } = require("../models/tutorModel");

const tutorController = {
    add: async (req, res) => {
        try {
            const newItem = new Tutor(req.body);
            const saveItem = await newItem.save();
            res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    get: async (req, res) => {
        try {
            const list = await Tutor.find().populate("classes").populate("subjects");
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = tutorController;