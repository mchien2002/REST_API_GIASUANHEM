const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");
dotenv.config();

const verifyTokenController = module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, process.env.SECRET_KEY_JWT, (error, admin) => {
                if (error) {
                    res.status(403).json("Token is not valid");
                } else {
                    // req.admin = admin;
                    next();
                }
            });
        } else {
            res.status(401).json("You are not authenticated");
        }
    }
}