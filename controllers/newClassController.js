const { Class } = require("../models/classModel");
const { Subject } = require("../models/subjectModel");
const { NewClass } = require("../models/newClassModel");
const { Category } = require("../models/categoryModel");

const newClassController = {
    add: async (req, res) => {
        // try {
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
        // } catch (error) {
        //     res.status(500).json(error);
        // }
    },

    get: async (req, res) => {
        try {
            const newClass = await NewClass.find().populate("classes").populate("categories").populate("subjects");
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
    },

    delete: async (req, res) => {
        try {
            const itemRemove = await NewClass.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateByID: async (req, res) => {
        try {
            NewClass.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json("Update Successfully")
            })
        } catch (error) {
            res.status(500).json(error);
        }
    },
    filter: async (req, res) => {
        const params = {};
        console.log("********PARAMS********");
        params.disId = req.query.disId;
        params.classId = req.query.classId;
        params.subId = req.query.subId;


        console.log(`disId: ${params.disId}`);
        console.log(`classId: ${params.classId}`);
        console.log(`subId: ${params.subId}`);
        try {
            const listCategory = await Category.findOne({
                _id: params.disId,
            });
            const listClass = await Class.findOne({
                _id: params.classId,
            });
            const listSubject = await Subject.findOne({
                _id: params.subId,
            });
            let data = await NewClass.find(
                {
                    "$or": [
                        { categories: listCategory },
                        { subjects: listSubject },
                        { classes: listClass }
                    ]
                }
            );
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = newClassController;