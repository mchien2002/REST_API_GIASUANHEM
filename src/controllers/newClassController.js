const { Class } = require("../models/classModel");
const { Subject } = require("../models/subjectModel");
const { NewClass } = require("../models/newClassModel");
const { Category } = require("../models/categoryModel");
const ApplicationState = require("../models/applicationState")

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
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },

    get: async (req, res) => {
        const params = {};
        console.log("********PARAMS********");
        params.disId = req.query.disId;
        params.classId = req.query.classId;
        params.subId = req.query.subId;
        params.newClassId = req.query._id;

        console.log(`disId: ${params.disId}`);
        console.log(`classId: ${params.classId}`);
        console.log(`subId: ${params.subId}`);
        try {
            let data = await NewClass.find({
                "$and": [
                    params.disId ? {
                        categories: {
                            _id: params.disId
                        }
                    } : {},
                    params.classId ? {
                        classes: {
                            _id: params.classId
                        }
                    } : {},
                    params.subId ? {
                        subjects: {
                            _id: params.subId
                        }
                    } : {},
                ]
            }).populate("classes").populate("categories").populate("subjects");
            res.status(200).json(data);

        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
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
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },

    delete: async (req, res) => {
        try {
            const itemRemove = await NewClass.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json(new ApplicationState(200));
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    updateByID: async (req, res) => {
        try {
            NewClass.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json(new ApplicationState(200))
            })
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
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
            let data = await NewClass.find({
                "$and": [
                    params.disId ? {
                        categories: {
                            _id: params.disId
                        }
                    } : {},
                    params.classId ? {
                        classes: {
                            _id: params.classId
                        }
                    } : {},
                    params.subId ? {
                        subjects: {
                            _id: params.subId
                        }
                    } : {},
                ]
            }).populate("classes").populate("categories").populate("subjects");
            res.status(200).json(data);

        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = newClassController;