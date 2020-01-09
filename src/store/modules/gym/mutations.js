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
  },

  [typeActions.EDIT_PASSWORD_USER_REQUEST](state) {
    state.editPasswordSuccess = false;
    state.editPasswordUserLoading = true;
    state.editPasswordUserError = false;
  },
  [typeActions.EDIT_PASSWORD_USER_SUCCESS](state) {
    state.editPasswordSuccess = true;
    state.editPasswordUserLoading = false;
    state.editPasswordUserError = false;
  },
  [typeActions.EDIT_PASSWORD_USER_ERROR](state) {
    state.editPasswordSuccess = false;
    state.editPasswordUserLoading = false;
    state.editPasswordUserError = true;
  },
  [typeActions.EDIT_PASSWORD_USER_RESET](state) {
    state.editPasswordSuccess = false;
    state.editPasswordUserLoading = false;
    state.editPasswordUserError = false;
  }
}

export default mutations;