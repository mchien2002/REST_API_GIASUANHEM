const { Account } = require("../models/accountModel");

const accountController = module.exports = {
    // find: async (req, res) => {
    //     await Account.find()
    //         .skip((req.query.page - 1) * req.query.PAGE_SIZE)
    //         .limit(req.query.PAGE_SIZE)
    //         .then(data => {
    //             res.status(200).json(data)
    //         })
    //         .catch(error => {
    //             res.status(500).json(this.appStatus.getStatus(500, error.message));
    //         });
    // };
    // updateAcc: async (req, res) => {
    //     Account.findOneAndUpdate(req.query.id, {
    //         $set: req.body,
    //     }).then(() => res.status(200).json(message: "Successfull")).catch((error) => res.status(500).json(message: "Something went wrong"));
    // }

    checkLogin: async (req, res) => {
        const params = {
            username: req.query.userName,
            password: req.query.password,
        }
        try {
            const acc = await Account.findOne({ userName: params.username });
            if (!acc) res.status(404).json({ message: "UserName Wrong!" });
            else if (params.password == acc.passWord) res.status(200).json("Successfull");
            else res.status(404).json({ message: "Password Wrong!" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

