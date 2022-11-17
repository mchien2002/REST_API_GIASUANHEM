const { SalaryInfo } = require("../models/salaryInfoModel");

const salaryInfoController = {
    add: async (req, res) => {
        try {
            const newItem = new SalaryInfo(req.body);
            const saveItem = await newItem.save();
            res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(error);
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
            res.status(500).json(error);
        }
    },
    delete: async (req, res) => {
        try {
            const itemRemove = await SalaryInfo.findByIdAndDelete({
                _id: req.query._id
            });
            res.status(200).json("Delete Successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },
    updateByID: async (req, res) => {
        try {
            SalaryInfo.findByIdAndUpdate(req.query._id, { $set: req.body }, function (error, item) {
                if (error) return next(error);
                res.status(200).json("Update Successfully")
            })
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = salaryInfoController