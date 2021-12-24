const express = require('express');
const responseMessage = require('../constants/responseMessage');
const statusCode = require('../constants/statusCode');
const user = require('../dbMockup/users');
const util = require('../lib/util');
const router = express.Router();

router.post('/signup', (req, res) => {
    const { id, name, password, email } = req.body;
    if (!id || !name || !password || !email) {
        return res.status(400).send(util.fail(400, "BAD REQUEST"));
    }

    const alreadyUser = users.filter(object => object.email).length > 0;
    if (alreadyUser) {
        return res.status(409).send((util.fail(400, "ALREADY EMAIL")));
    }

    const newUser = { id, name, password, email };
    users.push(newUser);
    res.status(200).send((util.success(200, "회원가입 성공", newUser)));

});

router.post("/login", async (req, res) => {
    // request body에서 데이터 가져오기
    const { email, password } = req.body;

    // request data 확인 - 없다면 Null Value 반환
    if(!id || !password) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE),
        );
    }

    // 존재하는 유저인지 확인 - 없다면 No user 반환
    const user = users.filter(object => object.email === email)[0];
    if(!user) {
        return res.status(statusCode.BAD_REQUEST).send(
            util.fail(statusCode.BAD_REQUEST, responseMessage.NO_USER),
        );
    }

    // 비밀번호 확인 - 틀렸다면 Mismatch password 반환
    const password = users.filter(object => object.password)

    // 성공 - login success와 함께 비밀번호를 제외한 유저 정보 반환
    const userInfo = { id, name, email };
    res.status(200).send((util.success(200, "login success", userInfo)));
});

router.get("/profile/:id", async (req, res) => {
    // request params에서 데이터 가져오기
})

module.exports = router;