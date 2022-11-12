const { Class } = require("../models/classModel");
const { Subject } = require("../models/subjectModel");
const { NewClass } = require("../models/newClassModel");

const newClassController = {
    addNewClass: async (req, res) => {
        try {
            const newClass = new NewClass(req.body);
            const saveNewClass = await newClass.save();
            // CHẠY saveNewClass
            res.status(200).json(saveNewClass);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAllNewClass: async(req, res) => {
        try{
            const newClass = await NewClass.find();
            res.status(200).json(newClass);
        } catch(error){
            res.status(500).json(error);
        }
    },

    deleteNewClassByID: async(req, res) => {
        
    }
}

module.exports = newClassController;