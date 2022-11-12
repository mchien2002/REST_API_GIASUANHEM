const { Class } = require("../models/classModel");
const { Subject } = require("../models/subjectModel");
const { NewClass } = require("../models/newClassModel");

const newClassController = {
    add: async (req, res) => {
        try {
            // LẤY THẰNG LỚN NHẤT
            NewClass.findOne({}).sort({id:"desc"}).then(async latestNewClass => {
                req.body.id = latestNewClass.id + 1;
                const newClass = new NewClass(req.body);
                const saveNewClass = await newClass.save();
                // CHẠY saveNewClass
                res.status(200).json(saveNewClass);
            });
            
        } catch (error) {
            res.status(500).json(error);
        }
    },

    get: async(req, res) => {
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