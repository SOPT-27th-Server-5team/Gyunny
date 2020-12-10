const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const util = require("../../modules/util");
const responseMessage = require("../../modules/responseMessage");
const statusCode = require("../../modules/statusCode");
const { User } = require("../../models");
const { Op } = require("sequelize");

router.post("/signup", async (req, res) => {
  const { email, password, userName } = req.body;

  if (!email || !password || !userName) {
    console.log("필요한 값이 없습니다");
    return res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
  }

  try {
    const alreadyEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (alreadyEmail) {
      console.log("이미 존재하는 이메일 입니다");
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.ALREADY_ID));
    }

    const salt = crypto.randomBytes(64).toString("base64");
    const hashPassword = crypto
      .pbkdf2Sync(password, salt, 10000, 64, "sha512")
      .toString("base64");

    const user = await User.create({
      email: email,
      password: hashPassword,
      userName: userName,
      salt: salt,
    });

    return res.status(statusCode.OK).send(
      util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS, {
        id: user.id,
        email,
        userName,
      })
    );
  } catch (err) {
    console.error(err);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.SIGN_IN_FAIL
        )
      );
  }
});


router.post("/signin", async (req, res) => {
  const { email, password } = req.body; 

  if (!email || !password) {
    res
      .status(statusCode.BAD_REQUEST)
      .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    return;
  }
  
  try {
    const alreadyEmail = await User.findOne({
      where: { email }
    });

    if (!alreadyEmail) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER));
      return;
    }

    const { password: hashedPassword, salt } = alreadyEmail;
    
    const checkPassword = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('base64');

    if (checkPassword !== hashedPassword) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.MISS_MATCH_PW));
      return;
    }

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.SIGN_IN_SUCCESS));
    return;

  } catch (err) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    return;
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll({
      attributes: ["id", "email", "userName"],
    });

    return res
      .status(statusCode.OK)
      .send(
        util.success(
          statusCode.OK,
          responseMessage.READ_USER_ALL_SUCCESS,
          users
        )
      );
  } catch (err) {
    console.error(err);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          responseMessage.READ_USER_ALL_FAIL
        )
      );
  }
});

router.put('/:idx', async (req, res) => {
  const idx = req.params.idx;
  const { email, userName } = req.body;

  if (!idx || !email || !userName) {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    return;
  }

  try {
    const user = await User.findOne({
      where: { 
        id: idx 
      },
      attributes: ['id', 'email', 'userName']
    });

    if (!user) {
      res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.INTERNAL_SERVER_ERROR));
      return;
    }
    
    await User.update({
      userName: userName,
      email: email
    }, {
      where: {
        id: idx
      }
    })

    res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_UPDATE_SUCCESS));
    return;

  } catch (err) {
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
    return;
  }
});

router.delete('/:idx', async (req, res) => {
  const idx = req.params.idx;

  if (!idx) {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    return;
  }

  await User.destroy({
    where: {
      id: idx
    }
  });

  res.status(statusCode.OK).send(util.success(statusCode.OK, responseMessage.MEMBER_DELETE_SUCCESS));
  return;
})

router.get("/:idx", async (req, res) => {
  try {
    await User.findAll({
      where: {
        userName: {
          [Op.like]: "%" + "Gyunny" + "%",
        },
        id: 1,
      },
    });
    console.log('test');
  } catch (err) {
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
  }
});

module.exports = router;
