const express = require("express");
const http = require("http");
const socketIO = require("socket.io");

const app = express();
const server = http.createServer(app); // express app으로 http 서버를 생성
const io = socketIO(server); // socket.io를 http 서버에 연결
const PORT = 8000;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));

app.get("/", (req, res) => {
  res.render("chat");
});

io.on("connection", (socket) => {
  console.log("서버 연결 완료 :: ", socket.id);

  // [실습1]
  socket.on("hello", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("helloKr", { who: "hello", msg: "안녕!" });
  });

  socket.on("study", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("studyKr", { who: "study", msg: "공부합시다!" });
  });

  socket.on("bye", (data) => {
    console.log(`${data.who} : ${data.msg}`);
    socket.emit("byeKr", { who: "bye", msg: "잘가!" });
  });

  // [실습3] 채팅창 입장 문구
  // io.emit("notice", `${socket.id} 님이 입장하셨습니다.`);

  // [실습3-2] 채팅창 입장 문구 socket.id -> nickname
  socket.on("setNick", (nickname) => {
    io.emit("notice", `${nickname} 님이 입장하셨습니다.`);
    socket.emit("entrySuccess", nickname);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
