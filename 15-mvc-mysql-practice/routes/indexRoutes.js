// router 사용 선언
const express = require("express");
const router = express.Router();
const indexController = require("../controller/Cmain");

// 기본주소 : localhost:PORT/

// 메인 화면
router.get("/", indexController.main);

// GET /signup 회원가입, 회원가입 성공시 로그인 페이지로 이동
router.get("/signup", indexController.get_signup);

// POST /signup
router.post("/signup", indexController.createUser);

// GET /signin 로그인, 로그인 성공시 - 프로필 페이지로 이동
router.get("/signin", indexController.get_signin);

// GET /profile 프로필 수정, 회원 탈퇴(삭제)시 - 메인으로 이동
router.get("/profile/:id", indexController.get_profile);

module.exports = router;
