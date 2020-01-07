const getters = {
  loginLoad(state) {
    return state.loginLoad;
  },
  loginError(state) {
    return state.loginError;
  },
  getUserLogged(state) {
    return state.userLogged;
  },
}

export default getters;