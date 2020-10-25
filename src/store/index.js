import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    statement: {}
  },
  getters: {
    allTransactions: state => {
      return state.statement.Transactions.sort((a, b) =>
        a.TransactionDate < b.TransactionDate ? -1 : 1
      );
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
