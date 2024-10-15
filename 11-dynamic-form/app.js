const express = require("express");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userInfo = {
  id: "banana",
  pw: "1234",
};

app.get("/", (req, res) => {
  res.render("index");
});

// ajax get
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// ajax post
app.post("/ajax", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  // res.send(req.query);
  res.json(req.query);
});

// axios post
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// fetch get
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send(req.query);s
  res.json(req.query);
});

// fetch post
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

// axios get 실습1
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get("/practice", (req, res) => {
  console.log(req.query);
  console.log(req.params);
  res.json(req.query);
});

app.post("/login", (req, res) => {
  console.log(req.body);
  if (userInfo.id === req.body.username && userInfo.pw === req.body.password) {
    res.json({ userInfo: req.body, isSuccess: true });
  } else {
    res.json({ isSuccess: false });
  }
});

app.listen(PORT, () => {
  console.log(`port is opening on ${PORT}`);
});
