import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import moment from "moment";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default new Vuex.Store({
  state: {
    latestReleases: []
  },
  mutations: {
    getLatestReleases(store, data) {
      store.latestReleases = data;
    }
  },
  actions: {
    async getLatestReleases({ commit }) {
      const startOfMonth = moment()
        .startOf("month")
        .format("YYYY-MM-DD");
      const endOfMonth = moment()
        .endOf("month")
        .format("YYYY-MM-DD");
      const response = await Vue.axios.get(
        `https://api.rawg.io/api/games?dates=${startOfMonth},${endOfMonth}&platforms=18,1,7,4`
      );
      commit("getLatestReleases", response.data.results);
    }
  },
  modules: {}
});
