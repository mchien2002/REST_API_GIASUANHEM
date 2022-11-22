const TransactionHistory = require("../models/transactionHistoryModel")
const { NewClass } = require('../models/newClassModel');
const transactionController = module.exports = {
    find: async (req, res) => {
        params = {
            page: parseInt(req.query.page),
            PAGE_SIZE: parseInt(req.query.PAGE_SIZE),
        }
        await TransactionHistory.find()
            .skip((params.page - 1) * params.PAGE_SIZE)
            .limit(params.PAGE_SIZE)
            .then((data) => { res.status(200).json(data) })
            .catch((error) => {
                res.status(500).json({
                    status: 500,
                    message: error.message,
                })
            });
    },
    create: async (req, res) => {
        switch (parseInt(req.query.role)) {
            case 0:
                if (parseInt(req.body.amount) >= 300000) {
                    req.body.status = 1;
                } else {
                    req.body.status = 0;
                }
                await TransactionHistory.create(req.body)
                    .then(() => {
                        res.status(200).json({
                            status: 200,
                            message: "Successfull",
                        });
                    })
                    .catch((error) => {
                        res.status(500).json({
                            status: 500,
                            message: error.message,
                        })
                    });
                break;
            case 1:
                await NewClass.findOne({ id: parseInt(req.query.id) })
                    .then(async (data) => {
                        console.log(data.salary);
                        if (parseInt(req.body.amount) >= (data.salary * 40 / 100)) {
                            req.body.status = 1;
                        } else {
                            req.body.status = 0;
                        }
                        await TransactionHistory.create(req.body);
                        res.status(200).json({
                            status: 200,
                            message: "Successfull",
                        });
                    })
                    .catch((error) => {
                        res.status(500).json({
                            status: 500,
                            message: error.message,
                        })
                    });
                break;
        }
    }
}