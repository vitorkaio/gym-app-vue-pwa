import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const gym = {
  namespaced: true,
  state: {
    users: null,
    usersLoad: false,
    usersError: false,
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default gym;