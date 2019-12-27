import * as typeActions from './typeActions';

const mutations = {
  [typeActions.USER_REQUEST](state) {
    state.usersLoad = true;
    state.usersError = false;
  },
  [typeActions.USER_SUCCESS](state, payload) {
    state.users = payload;
    state.usersLoad = false;
    state.usersError = false;
  },
  [typeActions.USER_ERROR](state) {
    state.users = null;
    state.usersLoad = false;
    state.usersError = true;
  }
}

export default mutations;