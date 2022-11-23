const { Account } = require("../models/accountModel");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

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
            else {
                const validPassword = await bcrypt.compare(params.password, acc.passWord);
                if (validPassword) {
                    accountController.generateAccessToken(acc);
                    accountController.generateRefreshToken(acc);
                    res.cookie("refreshToken", acc.refreshToken, {
                        httpOnly: true,
                        secure: false,
                        path: "/",
                        sameSite: "strict",
                    });
                    const { passWord, refreshToken, ...others } = acc._doc;
                    res.status(200).json(others);
                } else {
                    res.status(404).json({ message: "Password Wrong!" });
                }
            }
        } catch (error) {
            res.status(500).json(error.message);
        }
    },
    getAminAcc: async (req, res) => {
        await Account.find().then((data) => { res.status(200).json(data) }).catch((error) => {
            console.log(error.message);
            res.status(500).json(error.message)
        });
    },
    generateAccessToken: (acc) => {
        acc.accessToken = jwt.sign(
            { id: acc._id, },
            process.env.SECRET_KEY_JWT,
            { expiresIn: "45d" }
        );
    },
    generateRefreshToken: (acc) => {
        acc.refreshToken = jwt.sign(
            { id: acc._id, },
            process.env.SECRET_REFRESH_KEY_JWT,
            { expiresIn: "365d" }
        );
    },
    // requestRefreshToken: async (req,res)=>{
    //     const refreshhToken = req.cookie.refreshToken;
    //     if(!refreshhToken) return res.status(401).json("You're not authenticated"),
    //     jwt.verify(refreshhToken, process.env.SECRET_REFRESH_KEY_JWT, (error, user) =>{
    //         if (error){
    //             console.log(error);
    //         }
    //     })
    // }
}

