import Vue from 'vue';
import Vuex from 'vuex';
Vue.use (Vuex);
const store = new Vuex.Store ({
  state: {
    count: 0,
    score: [80, 90, 60, 70, 50, 88],
  },
  mutations: {
    add (state) {
      state.count++;
    },
  },
  getters: {
    //返回大于65分的成绩
    filterscore (state) {
      return state.score.filter (item => item > 65);
    },
    //返回过滤后数组长度
    scorelenght (state, getters) {
      return getters.filterscore.length;
    },
  },
});
export default store;
