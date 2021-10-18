const jwt = require('jsonwebtoken');
const User = require('../models/auth');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const [tokenType, tokenValue] = authorization.split(" ");

        if (tokenType !== 'Bearer') {
            res.status(400).send({
                err: "로그인 후 이용 가능한 기능입니다.",
            });
            return;
        }
        const { userID } = jwt.verify(tokenValue, process.env.TOKEN_KEY);
        User.findById(userID).then((user) => {
            res.locals.user = user;
            next();
        });
    } catch (error) {
        res.status(400).json({
            Message: '토큰에러, 토근 확인 요망'
        });
        return;
    }
};