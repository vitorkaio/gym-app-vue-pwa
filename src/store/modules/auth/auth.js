import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const auth = {
  namespaced: true,
  state: {
    userLogged: null,
    loginLoad: false,
    loginError: false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default auth;