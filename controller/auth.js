const User = require('../models/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authTest = async (req, res) => {
  res.send('hi');
};

const register = async (req, res) => {
  const { userEmail, userNickname } = req.body;
    let { userPassword } = req.body;
    const existNickname = await User.find({ userNickname });
    const existEmail = await User.find({ userEmail });
    if (existEmail.length) {
      res.status(400).send({
        errorMessage: '이미 이메일이 존재합니다.'
      });
    return;
    }
    if (existNickname.length) {
      res.status(400).send({
        errorMessage: '이미 동일한 닉네임이 존재합니다.'
      });
    return;
    }
    const encryptedPassowrd = bcrypt.hashSync(userPassword, 10);
    userPassword = encryptedPassowrd;
    const user = new User({ userEmail, userNickname, userPassword });
    await user.save();

    res.status(201).send({
      Message: '회원가입이 완료되었습니다.'
  });
};

const auth = async (req, res) => {
  const { userEmail, userPassword } = req.body;
  const user = await User.findOne({ userEmail }).exec();

  if (!user) {
    res.status(400).send({
      errorMessage: '이메일 또는 패스워드가 잘못되었습니다.'
    })
  return;
  }
   
  bcrypt.compare(userPassword, user['userPassword'], function(err, msg) {
    if (msg === true) {
      const token = jwt.sign({ userID: user.userID }, process.env.TOKEN_KEY);
      res.send({
        token,
        Message: '해시값과 비밀번호 동일, 로그인 완료!'
      })
      } else {
        res.status(400).send({
          errorMessage: '이메일 또는 패스워드가 잘못되었습니다.'
        })
        return;
      }
  })
};

const chkLogin  = async(req, res) => {
  try {
    const {user} = res.locals; //미들웨어에서 res.locals.user로 넘겨준 것
    res.status(201).send({
      user : {
        userNickname: user.userNickname, 
        userEmail: user.userEmail
      }, //user  닉네임이랑 이메일을 객체를 보낸것
        //await user = User.findByItem({key:value})
      Message: '로그인 확인 성공하였습니다.'
      })
  return;
  } catch (err) {
      res.status(400).send ({
        errorMessage: '닉네임 혹은 이메일 다시 한번 확인해주세요'
    })
    return;
  };
};

module.exports = {
  authTest,
  register,
  auth,
  chkLogin,
}
