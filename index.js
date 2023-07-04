var express = require("express");
var app = express();

// ejs를 view 엔진으로 설정
app.set("view engine", "ejs");
app.use(express.static("public"));

// post를 사용하기 위한 서버 모듈 추가
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// json, form 방식을 각각 바등

// res.render로 ejs 파일을 전달

// index page
app.get("/", function (req, res) {
  res.render("pages/index.ejs");
});

// about page
app.get("/about", function (req, res) {
  res.render("pages/about.ejs");
});

// req.query는 입력한 내용이 주소창에 뜸
// req.params는 객체 정보들이 뜸 id, name 이런 속성
app.get("/create", function (req, res) {
  let search = req.query.search;
  //  res.send(search);
  res.render("pages/about.ejs", { search });
});

app.post("/create2", function (req, res) {
  let pwd = req.body.pwd;
  res.render("pages/contact.ejs", { pwd });
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
