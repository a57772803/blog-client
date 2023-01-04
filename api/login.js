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

export default $axios => ({
    async getlogin(userinfo) {
        console.log("userinfo", userinfo)
        let res = await $axios.post("/login", userinfo);
        return res
    },
    async getlogin2(userinfo) {
        let res = await $axios.post("123", { aaa: 124 }).then((res) => console.log(res));
        console.log(2134);
        console.log(res);
        return res
    }
    // 其它接口
})
