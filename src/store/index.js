import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

export default new Vuex.Store({
  state: {},
  mutations: {},
  modules: {}
});
