const { Tutor } = require("../models/tutorModel");

const tutorController = module.exports = {
    find: async (req, res) => {
        params = {
            address: req.query.address,
            classId: req.query.classId,
            subId: req.query.subId,
            gender: req.query.gender,
            isNow: req.query.isNow,
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE),
        };
        await Tutor.find({
            "$and": [
                params.address ? { address: { $regex: params.address } } : {},
                params.classId ? { classes: { _id: params.classId } } : {},
                params.subId ? { subjects: { _id: params.subId } } : {},
                params.gender ? { gender: { $regex: params.gender } } : {},
                params.isNow ? { isNow: { $regex: params.isNow } } : {},
            ]
        })
            .populate("classes").populate("subjects")
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then((data) => { res.status(200).json(data) }).catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            })
    },
    create: async (req, res) => {
        await Tutor.create(req.body)
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
    deleteByID: async (req, res) => {
        await Tutor.findByIdAndDelete(req.query._id)
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
    updateByID: async (req, res) => {
        await Tutor.findByIdAndUpdate(req.query._id, { $set: req.body })
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
}