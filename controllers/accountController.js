const { Account } = require("../models/accountModel");
const accountController = {
    checkLogin: async (req, res) => {
        try {
            const params = {};
            params.userName = req.query.userName;
            params.pass = req.query.password;
            const checkItem = await Account.findOne({
                $and: [{ userName: params.userName }, {
                    passWord: params.pass
                }]
            });
            if (checkItem) {
                res.status(200).json("Login Successsfully")
            } else {
                res.status(500).json("failed");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = accountController;