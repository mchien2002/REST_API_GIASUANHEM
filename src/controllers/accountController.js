const { compile } = require("morgan");
const { Account } = require("../models/accountModel");
const ApplicationState = require("../models/applicationState")
const accountController = {
    checkLogin: async (req, res) => {
        try {
            const accountItem = await Account.findOne({
                userName: req.body.userName,
            })
            if (!accountItem) {
                res.status(404).json(new ApplicationState(404, "Sai tên tài khoản"));
            } else if (req.body.passWord == accountItem.passWord) {
                res.status(200).json(new ApplicationState(200));
            } else {
                res.status(404).json(new ApplicationState(404, "Sai mật khẩu"));
            }
        } catch (error) {
            res.status(500).json(new ApplicationState(500, error.message));
        }
    }
}

module.exports = accountController;