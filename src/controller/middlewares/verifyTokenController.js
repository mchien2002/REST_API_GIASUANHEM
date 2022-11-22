const jwt = require('jsonwebtoken');

const verifyTokenController = module.exports = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token;
        if (token) {
            const accessToken = token.split(" ")[1];
            jwt.verify(accessToken, "giasuanhem", (error, admin) => {
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