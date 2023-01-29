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
        description: "沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖",
        content: `陽光陽光陽光陽光沒想起來是，但現超多有利嗚嗚嗚。但還是商自個人的那個，者的杏壽郎在，爆做不到真的很，心深到一路過的一件事，早晨聲以開，人想的數量能看到我就覺。

是真的二次變得？真的好的事情大人比例就是次，走早安什麼試看就不想⋯村民包，多不該我表情，粉卜結，那麼好多了但是他公無法。回想可以做看到了。

血鬼成，的什麼樣在用的演⋯拍，很美做好的時候在自己⋯還在，包武器自。嘴軟體快樂給大家收到了，來如想有太看著他，成最近力已經在拿到什麼，羅智障喜歡的應該是版本知道能，沒有特口的最想的樣子，第睡聯的影是還間來。`,
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
        description:
          "有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖有鎖",
        content: `Cupcake ipsum dolor. Sit amet pastry cake toffee carrot cake. Cheesecake candy I love dragée cake jelly-o pie. Cheesecake sesame snaps danish lemon drops sesame snaps sugar plum cupcake powder. Cookie sweet wafer. Jelly chocolate cake dragée candy canes halvah.`,
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
        description: "沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖",
        content: `有要一首的行時候看，手作為知道自突是不⋯太好自己的時期的，接還不錯，完美美的開使用的宮侑也有，那時候可以我的的的這。起來就來很，事部作品一個名其結果他：對不就是不起的，的果不有夠可懶得速度啊的聲音，乾脆近消息，的人也是。還了學校，上我喜歡麼都沒好看到底是，我好道和糕十⋯買超好看，大學他們的沒們可啊啊啊訓練，不知道而且。界隨機隻手社，當成就已經話我害我堆人：的的朋友本的我不是給我在用。人怎麼沒辦。名片來不失就會知道為，出來下收節，不過節目占卜得這樣獲得，我覺得的很想，影片有我們經不是，來說唯一我不。`,
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
      article_id: "003",
      title: "仙人掌",
      description: "沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖沒鎖",
      content: `有要一首的行時候看，手作為知道自突是不⋯太好自己的時期的，接還不錯，完美美的開使用的宮侑也有，那時候可以我的的的這。起來就來很，事部作品一個名其結果他：對不就是不起的，的果不有夠可懶得速度啊的聲音，乾脆近消息，的人也是。
還了學校，上我喜歡麼都沒好看到底是，我好道和糕十⋯買超好看，

~~大學他們的沒們可啊啊啊訓練，不知道而且。界隨機隻手社，**當成就已經話我害我堆人：的的朋友本的我不是給我在用。人怎麼沒辦。名片來不失就會知道為，出來下收節，不過節目占卜得這樣獲得，我覺得的很想，影片有我們經不是，來說唯一我不~~`,
      islock: "0",
      password: "5",
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
