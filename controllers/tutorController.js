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
        const params = {};
        console.log("********PARAMS********");
        params.address = req.query.address;
        params.classId = req.query.classId;
        params.subId = req.query.subId;
        params.gender = req.query.gender;
        params.isNow = req.query.isNow;

        console.log(`disId: ${params.address}`);
        console.log(`classId: ${params.classId}`);
        console.log(`subId: ${params.subId}`);
        console.log(`gender: ${params.gender}`);
        console.log(`isNow: ${params.isNow}`);

        try {
            let data = await Tutor.find({
                "$and": [
                    params.address ? {
                        address: { $regex: params.address }
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
                    params.gender ? {
                        gender: { $regex: params.gender }
                    } : {},
                    params.isNow ? {
                        isNow: { $regex: params.isNow }
                    } : {},
                ]
            }).populate("classes").populate("subjects");
            res.status(200).json(data);

        } catch (error) {
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const itemRemove = await Tutor.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateByID: async (req, res) => {
        try {
            Tutor.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json("Update Successfully")
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = tutorController;