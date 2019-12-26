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
    latestReleases: [],
    selectedGame: {}
  },
  mutations: {
    getLatestReleases(store, games) {
      store.latestReleases = games;
    },
    getSelectedGame(store, game) {
      store.selectedGame = game;
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
    },
    async getSelectedGame({ commit }, id) {
      const response = await Vue.axios.get(
        `https://api.rawg.io/api/games/${id}`
      );
      console.log("This is selected game", response);
      commit("getSelectedGame", response.data);
    }
  },
  modules: {}
});
