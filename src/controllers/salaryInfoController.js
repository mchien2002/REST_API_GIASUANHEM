const { SalaryInfo } = require("../models/salaryInfoModel");
const ApplicationState = require("../models/applicationState")

const salaryInfoController = {
    add: async (req, res) => {
        try {
            const newItem = new SalaryInfo(req.body);
            const saveItem = await newItem.save();
            res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    get: async (req, res) => {
        try {
            const newPost = await SalaryInfo.find(
                req.query.style ? {
                    styleTeacher: req.query.style,
                } : {}
            );
            res.status(200).json(newPost);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    delete: async (req, res) => {
        try {
            const itemRemove = await SalaryInfo.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json(new ApplicationState(200));
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    updateByID: async (req, res) => {
        try {
            SalaryInfo.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json(new ApplicationState(200))
            })
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = salaryInfoController