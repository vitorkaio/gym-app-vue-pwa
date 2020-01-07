 
import * as typeActions from './typeActions';

const mutations = {
  [typeActions.LOGIN_REQUEST](state) {
    state.loginLoad = true;
    state.loginError = false;
  },
  [typeActions.LOGIN_SUCCESS](state, payload) {
    state.userLogged = payload;
    state.loginLoad = false;
    state.loginError = false;
  },
  [typeActions.LOGIN_ERROR](state) {
    state.userLogged = null;
    state.loginLoad = false;
    state.loginError = true;
  },
  [typeActions.LOGIN_RESET](state) {
    state.userLogged = null;
    state.loginLoad = false;
    state.loginError = false;
  }
}

export default mutations;