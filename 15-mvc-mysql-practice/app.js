// express 모듈 사용
const express = require("express");
const app = express();
const PORT = 8000;

// ejs 템플릿 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 미들웨어 static을 통해 정적 파일 제공
app.use("/static", express.static(__dirname + "/static"));

// body-parser (데이터를 쉽게 처리할 수 있도록 도와주는 미들웨어) - 요청의 body를 해석해서 req.body로 받을 수 있게 도와줌
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 라우팅 설정
const indexRoutes = require("./routes/indexRoutes");
app.use("/", indexRoutes);

// express 이용하여 서버 열기
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
