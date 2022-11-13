const { Class } = require("../models/classModel");
const { Subject } = require("../models/subjectModel");
const { NewClass } = require("../models/newClassModel");

const newClassController = {
    add: async (req, res) => {
        try {
            // LẤY THẰNG LỚN NHẤT
            NewClass.findOne({}).sort({ id: "desc" }).then(async latestNewClass => {
                if (latestNewClass) {
                    req.body.id = latestNewClass.id + 1;
                } else {
                    req.body.id = 1;
                }
                req.body.status = 0;
                const newClass = new NewClass(req.body);
                const saveNewClass = await newClass.save();
                // CHẠY saveNewClass
                res.status(200).json(saveNewClass);
            });
        } catch (error) {
            res.status(500).json(error);
        }
    },

    get: async (req, res) => {
        try {
            const newClass = await NewClass.find().populate("categories");
            res.status(200).json(newClass);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    updateStatus: async (req, res) => {
        try {
            console.log("********PARAMS********");
            console.log(`_id: ${req.query._id}`);
            console.log(`status: ${req.query.status}`);
            const filter = { _id: req.query._id };
            const update = { status: req.query.status };
            let item = await NewClass.findOneAndUpdate(filter, update);
            const saveItem = item.save();
            res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = newClassController;