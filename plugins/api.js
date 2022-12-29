import login from '../api/login'
export default function ({ $axios }, inject) {
    const apiModules={};
//   $axios.onRequest((config) => {
//   	// 相关配置
//   })
console.log("$axios",$axios);
console.log("inject",inject);
    apiModules.login= login($axios);
  // Inject to context as $api
  inject('api',apiModules);
}
