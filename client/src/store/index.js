import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default new Vuex.Store({
  state: {},
  mutations: {
    loadData() {
      console.log("mutations");
    }
  },
  actions: {
    async loadData({ commit }) {
      const data = await Vue.axios.get("games", {
        headers: {
          Accept: "application/json",
          "user-key": process.env.VUE_APP_API_KEY
        },
        data:
          "fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,collection,cover,created_at,dlcs,expansions,external_games,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;"
      });
      console.log("This is data", data.data);
      commit("loadData");
    }
  },
  modules: {}
});
