 
import Vue from 'vue';
import Vuex from 'vuex';

import gym from './modules/gym/gym';
import auth from './modules/auth/auth';

Vue.use(Vuex);

const vuex = new Vuex.Store({
  modules: {
    gym,
    auth
  }
});

export default vuex;