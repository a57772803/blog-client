export const state = () => ({
  isLogin: false,
  userInfo: {
    name: "arooor",
    e_mail: "",
    username: "1111", //帳號
    phone: "",
    birthday: "",
  },
});

export const getters = {
  getIsLogin(state) {
    return state.isLogin;
  },
};

export const mutations = {
  SET_LOGIN(state) {
    state.isLogin = true;
  },
  SET_USERINFO(state, userInfo) {
    state.userInfo.name = userInfo.name;
    state.userInfo.e_mail = userInfo.e_mail;
    state.userInfo.username = userInfo.username;
    state.userInfo.phone = userInfo.phone;
    state.userInfo.birthday = userInfo.birthday;
  },
};

export const actions = {
  userLogin({ commit, state }, userInfo) {
    commit("SET_LOGIN");
    commit("SET_USERINFO", userInfo);
    this.$router.push({ name: "index" });
    //console.log("state.getIsLogin", state.isLogin);
  },
  async fetchCounter({ commit }, changeN) {
    // make request
    const res = { data: changeN };
    commit("change", res);
    return res.data;
  },
};
