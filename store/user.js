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
  increment(state) {
    state.counter++;
  },
  change(state, res) {
    state.counter = res.data;
  },
};

export const actions = {
  userLogin({ commit, state }) {
    commit("SET_LOGIN");
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
