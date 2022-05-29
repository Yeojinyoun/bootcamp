const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("서버가 포트 3000번으로 시작되었습니다.");
});

// ? 앞에 있는 문자가 0개 혹은 1개,/ abcd, /acd

// + b가 한개 이상
app.get("/ab+cd", (req, res) => {
  res.send("ab+cd");
});

//
app.get("/ab*cd", (req, res) => {
  res.send("ab?cd");
});

// a가 있으면 다 걸림
app.get(/a/, (req, res) => {
  res.send("/a/");
});

app.get(/^insert/, (req, res) => {
  res.send("/a/");
});
