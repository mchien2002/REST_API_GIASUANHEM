const { parse } = require("dotenv");
const { Class } = require("../models/classModel");
const { NewClass } = require("../models/newClassModel");
const { Tutor } = require("../models/tutorModel");

const classController = module.exports = {
    find: async (req, res) => {
        params = {
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE),
        }
        await Class.find()
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then(data => { res.status(200).json(data) })
            .catch(error => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    create: async (req, res) => {
        await Class.create(req.body)
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            })
    },
    deleteByID: async (req, res) => {
        await NewClass.updateMany(
            { classes: req.query._id },
            { $pull: { classes: req.query._id } }
        ).catch(error => {
            console.log(error.message);
            res.status(500).json(this.appStatus.getStatus(500, error.message));
        });
        await Tutor.updateMany(
            { classes: req.query._id },
            { $pull: { classes: req.query._id } }
        ).catch(error => {
            console.log(error.message);
            res.status(500).json(this.appStatus.getStatus(500, error.message));
        });
        await Class.findByIdAndDelete(req.query._id)
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            }).catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            })
    },
    updateByID: async (req, res) => {
        await Class.findByIdAndUpdate(req.query._id, { $set: req.body })
            .then(() => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull"
                })
            }).catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            })
    }
}