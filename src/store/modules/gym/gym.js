import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const gym = {
  namespaced: true,
  state: {
    user: null,
    userLoad: false,
    userError: false,

    editPasswordSuccess: false,
    editPasswordUserLoading: false,
    editPasswordUserError: false
  },
  getters: getters,
  mutations: mutations,
  actions: actions
};

export default gym;