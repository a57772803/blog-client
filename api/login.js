//import { request } from '@/utils/request'
// // 登录
// export function getLogin(form) {
//     let res = request('/api/login', 'POST', form)
//     return res
// }
// // 用户信息
// export function getUser(token) {
//     let res = request('/api/user', 'POST', token)
//     return res
// }
// import axios from 'axios'
//  function getlogin(userinfo) {
//     let res =axios.get("login");
//     return res
// };

export default ($axios) => ({
  async userlogin(userinfo) {
    console.log("userinfo", userinfo);
    let res = await $axios.post("/login", userinfo);
    return res;
  },
  async getlogin(userinfo) {
    console.log("userinfo", userinfo);
    let res = await $axios.post("/login", userinfo);
    return res;
  },
  // 其它接口
});
