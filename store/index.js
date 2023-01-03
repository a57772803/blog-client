export const state = () => ({
    counter: 0
})

export const getters = {
    getCounter(state) {
        return state.counter
    }
}

export const mutations = {
    increment(state) {
        state.counter++;
    },
    change(state, res) {
        state.counter = res.data;
    },
}

export const actions = {
    async fetchCounter({ commit }, changeN) {
        // make request
        const res = { data: changeN };
        commit("change", res);
        return res.data;
    }
}