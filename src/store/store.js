 
import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersist from 'vuex-persist';

import gym from './modules/gym/gym';
import auth from './modules/auth/auth';

Vue.use(Vuex);

const vuexPersist = new VuexPersist({
  key: 'gym-app-pwa',
  storage: window.localStorage,
  modules: ['auth']
})

const vuex = new Vuex.Store({
  modules: {
    gym,
    auth
  },
  plugins: [vuexPersist.plugin]
});

export default vuex;