const getters = {
  userLoad(state) {
    return state.userLoad;
  },
  userError(state) {
    return state.userError;
  },
  getUser(state) {
    return state.user;
  },

  
  editPasswordSuccess(state) {
    return state.editPasswordSuccess;
  },

  editPasswordUserLoading(state) {
    return state.editPasswordUserLoading;
  },
  editPasswordUserError(state) {
    return state.editPasswordUserError;
  }

}

export default getters;