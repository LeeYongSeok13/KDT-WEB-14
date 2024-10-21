const User = require("../model/User");

const main = async (req, res) => {
  // 모델에서 데이터 받아오기
  const data = await User.getUser();
  console.log(data);
  // 컨트롤러 -> 모델 -> DB -> 모델 -> 컨트롤러 -> 응답
  // 비동기 처리가 필요
  res.render("index");
};

const get_signup = (req, res) => {
  res.render("signup");
};

const getUser = async (req, res) => {
  console.log("getUser", req.params);

  const result = await User.getUser(req.params.id);
  console.log("result", result);

  if (req.length > 0) {
    res.render("profile", { data: result[0], message: "조회 완료" });
  } else {
    res.render("profile", { data: null, message: "존재하는 회원 없음" });
  }
};

const createUser = async (req, res) => {
  console.log("post_signup", req.body);

  const result = await User.createUser(req.body);
  res.json({ result: true });
};

const get_signin = (req, res) => {
  res.render("signin");
};

const get_profile = (req, res) => {
  res.render("profile");
};

module.exports = {
  main,
  get_signup,
  getUser,
  createUser,
  get_signin,
  get_profile,
};
