import Mock from "mockjs";
const BASE_URL = process.env.BASE_URL;
const AUTHOR = "aaa";
const ARTICLE_ID = "003";

//登入 /login
// GET
//{"username":"","password":""}
Mock.mock(BASE_URL + "/login", (options) => {
  let res = null;
  console.log("options", options);
  const body = JSON.parse(options.body);
  console.log("body", body);
  if (body.username == "aaa" && body.password == "bbb") {
    res = {
      name: "aaa",
      e_mail: "aaaa@bbb",
      username: "aaa",
      phone: null,
      birthday: null,
    };
  }
  return JSON.stringify(res);
});

//註冊 /signup
//POST
//{"name":"","e_mail":"","username":"","password":"","checkPassword":""}
Mock.mock(BASE_URL + "/signup", (options) => {
  let res = null;

  const body = JSON.parse(options.body);

  if (body.username == "aaa") {
    res = "該帳號已被使用";
  }
  if (body.password !== body.checkPassword) {
    res = "兩次輸入密碼不相符";
  } else res = "Success";

  return res;
});

//查USER的全部文章
//{userName}
//GET
//{
//   article_id: "",
//   title: "",
//   content: "",
//   islock: "",
//   password: "",
//   password_hint: "",
//   created_time: "",
//   modified: "",
//   commentList: { comment_id: "", content: "", created_time: "" },
// };
Mock.mock(BASE_URL + `/${AUTHOR}`, (options) => {
  const param = options.url.replace(BASE_URL, "");
  console.log(param, "param");
  const body = JSON.parse(options.body);
  let res = null;

  if (param.indexOf("aaa") != -1) {
    res = [
      {
        article_id: "001",
        title: "陽光",
        content: "陽光陽光陽光陽光",
        islock: "0",
        password: "5",
        password_hint: "6",
        created_time: "",
        modified: "8",
        commentList: { comment_id: "", content: "", created_time: "" },
      },
      {
        article_id: "002",
        title: "沙灘",
        content: "沙灘沙灘沙灘",
        islock: "4",
        password: "1",
        password_hint: "6",
        created_time: "7",
        modified: "8",
        commentList: { comment_id: "", content: "", created_time: "" },
      },
      {
        article_id: "003",
        title: "仙人掌",
        content: "仙人掌仙人掌仙人掌",
        islock: "0",
        password: "5",
        password_hint: "6",
        created_time: "7",
        modified: "8",
        commentList: { comment_id: "", content: "", created_time: "" },
      },
    ];
  }
  return JSON.stringify(res);
});

//查看沒有鎖密碼的文章
//{userName}/{id}
//GET
//{
//   article_id: "",
//   title: "",
//   content: "",
//   islock: "",
//   password: "",
//   password_hint: "",
//   created_time: "",
//   modified: "",
//   commentList: { comment_id: "", content: "", created_time: "" },
// };
Mock.mock(BASE_URL + `/${AUTHOR}/${ARTICLE_ID}`, (options) => {
  const url = options.url.replace(BASE_URL, "");
  const body = JSON.parse(options.body);
  let res = null;

  if (url.indexOf("aaa") != -1 && url.indexOf("003") != -1) {
    res = {
      article_id: "002",
      title: "沙灘",
      content: "沙灘沙灘沙灘",
      islock: "4",
      password: "1",
      password_hint: "6",
      created_time: "7",
      modified: "8",
      commentList: { comment_id: "", content: "", created_time: "" },
    };
  }
  return JSON.stringify(res);
});

//查看沒有鎖密碼的文章
//{userName}/{id}
//POST
//{ "articlePassword": "" }
Mock.mock(BASE_URL + `/${AUTHOR}/${ARTICLE_ID}`, "post", (options) => {
  const url = options.url.replace(BASE_URL, "");
  const body = JSON.parse(options.body);
  let res = null;

  if (body.articlePassword == "bbb") {
    res = {
      article_id: "",
      title: "",
      content: "",
      islock: "",
      password: "",
      password_hint: "",
      created_time: "",
      modified: "",
      commentList: { comment_id: "", content: "", created_time: "" },
    };
  } else return res;
});

//儲存文章
//{userName}/edit
//POST
//{{"title":"","content":"","islock":"0 or 1","password":"","password_hint":""},{"tag_id":"","name":""}}
Mock.mock(BASE_URL + "/edit", (options) => {
  const url = options.url.replace(BASE_URL, "");
  const body = JSON.parse(options.body);
  let res = null;

  if (body.articlePassword == "bbb") {
    res = "Success";
  } else {
    res = "新增文章時發生錯誤";
  }
  return res;
});

//取得文章分類
// /{userName}/getAllTag
//GET
Mock.mock(BASE_URL + `/${AUTHOR}/getAllTag`, (options) => {
  const body = JSON.parse(options.body);
  let res = null;
  console.log("options.url", options.url);
  if (options.url.indexOf("aaa") != -1) {
    res = { tag_id: "111", name: "222" };
  }
  return JSON.stringify(res);
});

Mock.mock(BASE_URL + "user.json", {
  "list|1-10": [
    {
      "id|+1": 1,
      email: "@EMAIL",
    },
  ],
});
