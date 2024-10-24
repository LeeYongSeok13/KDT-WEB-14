const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8000;

// ejs 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// body-parser 설정
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// session 옵션 객체
const sessionConfig = {
  secret: "mySecretSession",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 60 * 1000,
  },
};

app.use(session(sessionConfig));

const userInfo = {
  username: "banana",
  password: "1234",
};

// 메인 페이지
app.get("/", (req, res) => {
  // req.session.user 값이 있는지 검사를 해서 isLogin 변수로 로그인 여부
  const user = req.session.user;
  console.log("user > ", user);

  if (user !== undefined) {
    res.render("index", { isLogin: true, user: user });
  } else {
    res.render("index", { isLogin: false });
  }
});

// 로그인 페이지
app.get("/login", (req, res) => {
  res.render("login");
});

// 로그인 처리
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === userInfo.username && password === userInfo.password) {
    req.session.user = userInfo; // 세션에 사용자 정보 저장
    return res.redirect("/");
  } else {
    res.send("로그인 실패!");
  }
});

app.get("/logout", (req, res) => {
  const user = req.session.user;

  if (user !== undefined) {
    req.session.destroy((err) => {
      if (err) res.send("로그인 실패");
      else res.redirect("/");
    });
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
