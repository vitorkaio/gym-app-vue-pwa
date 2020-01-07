import Crypt from '@/services/Crypt';

const getters = {
  loginLoad(state) {
    return state.loginLoad;
  },
  loginError(state) {
    return state.loginError;
  },
  getUserLogged(state) {
    return Crypt.decryptData(state.userLogged);
  },
}

export default getters;