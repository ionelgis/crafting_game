import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setLogedInUser(state, payload) {
      console.log("payload:", payload);
      state.user = payload;
    }
  },
  actions: {}
});
