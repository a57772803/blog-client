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
  async getArticles(author) {
    console.log("author", author);
    let res = await $axios.get(`/${author}`);
    return res;
  },
  async getAllTag(author) {
    let res = await $axios.get(`/${author}/getAllTag`);
    return res;
  },
  // 其它接口
});
