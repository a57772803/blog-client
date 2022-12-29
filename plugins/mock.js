import Mock from "mockjs";
const BASE_URL = process.env.BASE_URL;

//登入 /login
// GET 
//{"username":"","password":""}
Mock.mock(BASE_URL + "/login", (options) => {
  let res = null;
  const body = JSON.parse(options.body);

  if (body.username == "aaa" && body.password == "bbb")
    res = {
      name: "aaa",
      e_mail: "aaaa@bbb",
      username: "aaa",
      phone: null,
      birthday: null,
    };
  else return res;
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
Mock.mock(BASE_URL, (options) => {
  const url = options.url.replace(BASE_URL, "");
  const body = JSON.parse(options.body);
  let res = null;

  if (url == BASE_URL) {

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
Mock.mock(/[a-zA-Z]+\//, (options) => {
  const url = options.url.replace(BASE_URL, "");
  const body = JSON.parse(options.body);
  let res = null;

  if (url == BASE_URL) {

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
Mock.mock(BASE_URL, (options) => {
  const url = options.url.replace(BASE_URL, "");
  const body = JSON.parse(options.body);
  let res = null;

  if (url == BASE_URL) {

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


Mock.mock(BASE_URL + "user.json", {
  "list|1-10": [
    {
      "id|+1": 1,
      email: "@EMAIL",
    },
  ],
});
Mock.mock(BASE_URL + "/123", "post", (options) => {
  console.log(options, "options");
  const body = JSON.parse(options.body);
  console.log(body, "body");
  return {
    status: 200,
    message: "添加成功2",
  };
});
