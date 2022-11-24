const { SalaryInfo } = require("../models/salaryInfoModel");

const salaryinfoController = module.exports = {
    find: async (req, res) => {
        params = {
            style: req.query.style,
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE),
        }
        await SalaryInfo.find()
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then((data) => { res.status(200).json(data) })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    create: async (req, res) => {
        await SalaryInfo.create(req.body)
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull",
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });

    },
    deleteByID: async (req, res) => {
        await SalaryInfo.findByIdAndDelete(req.query._id)
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull",
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    updateByID: async (req, res) => {
        await SalaryInfo.findByIdAndUpdate(req.query._id, { $set: req.body })
            .then((data) => {
                res.status(200).json({
                    status: 200,
                    message: "Successfull",
                })
            })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    },
    findByID: async (req, res) => {
        await SalaryInfo.findById(req.query._id)
            .then((data) => { res.status(200).json(data) })
            .catch((error) => {
                console.log(error.message);
                res.status(500).json({
                    status: 500,
                    message: "Some thing went wrong!",
                })
            });
    }
}