const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    const result = {
        status: 200,
        message: "blog에 접근합니다.",
    };
    res.status(200).send(result);
});

router.post("/post", (req, res) => {
    const result = {
        status: 200,
        message: "포스팅 완료 ~",
    };
    res.status(200).send(result);
});

module.exports = router;