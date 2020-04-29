import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
import global from './global/index'
import account from './account/index'
import cards from './cards/index'
import filter from './filter';

export default new Vuex.Store({
  modules:{
    global,
    account,
    cards,
    filter
  }
})
