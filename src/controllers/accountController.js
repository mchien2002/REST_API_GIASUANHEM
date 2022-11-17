const { compile } = require("morgan");
const { Account } = require("../models/accountModel");
const accountController = {
    checkLogin: async (req, res) => {
        try {
            const accountItem = await Account.findOne({
                userName: req.body.userName,
            })
            if(!accountItem){
                res.status(404).json("Sai tên đăng nhập");
            } else{
                const pass = (req.body.passWord == accountItem.passWord);
                if (!pass){
                    status(404).json("Sai mật khẩu");
                } else{
                    res.status(500).json("Đăng nhập thành công");
                }
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = accountController;