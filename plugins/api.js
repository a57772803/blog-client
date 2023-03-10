import login from "../api/login";
import article from "../api/article";
import { Message } from "element-ui";

export default function ({ $axios }, inject) {
  const apiModules = {};
  //axios 請求配置
  $axios.onRequest((config) => {
    config.baseURL = process.env.BASE_URL;
    //console.log("config", config);
    console.log("requestUrl", config.baseURL + config.url);
    // 相关配置
  });

  //axios 響應配置
  $axios.onResponse((res) => {
    console.log("res", res);
    console.log("request from", res.config.url, "res.data", res.data);

    if (!JSON.parse(res.data)) {
      return Promise.reject(res.config.url, "fail");
    }
  });

  $axios.onError((error) => {
    console.log("error:", error);
  });

  //console.log("$axios", $axios);
  //console.log("inject", inject);

  apiModules.login = login($axios);
  apiModules.article = article($axios);
  // Inject to context as $api
  inject("api", apiModules);
}

Message({
  showClose: true,
  message: "111",
  type: "error",
  duration: 5 * 600,
});
