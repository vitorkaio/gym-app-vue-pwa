 
import Vue from 'vue';
import Vuex from 'vuex';

import gym from './modules/gym/gym';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  modules: {
    gym,
  }
});

export default vuex;