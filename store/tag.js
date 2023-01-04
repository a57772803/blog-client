export const state = () => ({
  tags: [],
});

export const getters = {
  getallTags(state) {
    return state.tags;
  },
};

export const mutations = {
  increment(state) {
    state.counter++;
  },
};

export const actions = {
  async fetchCounter({ commit }, changeN) {
    // make request
    const res = { data: changeN };
    commit("change", res);
    return res.data;
  },
};
