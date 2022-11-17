const { TransactionHistory } = require("../models/transactionHistoryModel")
const ApplicationState = require("../models/applicationState")


const transactionHistoryController = {
    get: async (req, res) => {
        try {
            const listItem = await TransactionHistory.find();
            res.status(200).json(listItem);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    },
    add: async (req, res) => {
        try {
            const addItem = await TransactionHistory.create(req.body);
            res.status(200).json(addItem);
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = transactionHistoryController;