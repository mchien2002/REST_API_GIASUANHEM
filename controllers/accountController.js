const { Account } = require("../models/accountModel");
const accountController = {
    add: async (req, res) => {
        try {
        const newItem = new Account(req.body);
        const saveItem = await newItem.save();
        res.status(200).json(saveItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    getAll: async (req, res) => {
        try {
            const newItem = await Account.find();
            res.status(200).json(newItem);
        } catch (error) {
            res.status(500).json(error);
        }
    },
}

module.exports = accountController;