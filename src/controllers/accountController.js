const { account: Account } = require("../models/accountModel");
const { CHECK_LOGIN } = require("../utils/apiConstant");
const BaseController = require("./base/baseController");

class AccountController extends BaseController {
    constructor() {
        super(Account);
        this.CHECK_LOGIN = CHECK_LOGIN;
    }
    checkLogin() {
        return async (req, res) => {
            this.params.username = req.query.userName;
            this.params.password = req.query.password;
            try {
                const accountItem = await Account.findOne({
                    userName: this.params.username,
                })
                if (!accountItem) {
                    res.status(404).json(this.appStatus.getStatus(404, "Sai tên tài khoản"));
                } else if (this.params.password == accountItem.passWord) {
                    res.status(200).json(this.appStatus.getStatus(200));
                } else {
                    res.status(404).json(this.appStatus.getStatus(404, "Sai mật khẩu"));
                }
            } catch (error) {
                res.status(500).json(this.appStatus.getStatus(500, error.message));
            }
        }
    }
}

module.exports = AccountController;