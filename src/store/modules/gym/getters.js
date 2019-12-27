const getters = {
  usersLoad(state) {
    return state.usersLoad;
  },
  usersError(state) {
    return state.usersError;
  },
  getUsers(state) {
    return state.users;
  },
}

export default getters;