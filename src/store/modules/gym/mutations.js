import * as typeActions from './typeActions';

const mutations = {
  [typeActions.USER_REQUEST](state) {
    state.userLoad = true;
    state.userError = false;
  },
  [typeActions.USER_SUCCESS](state, payload) {
    state.user = payload;
    state.userLoad = false;
    state.userError = false;
  },
  [typeActions.USER_ERROR](state) {
    state.user = null;
    state.userLoad = false;
    state.userError = true;
  }
}

export default mutations;