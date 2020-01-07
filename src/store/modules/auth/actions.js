import * as typeActions from './typeActions';
import * as ApiGym from '@/services/apiGym/ApiGym';

/* eslint-disable */

const actions = {

  async [typeActions.LOGIN_REQUEST](context, payload) {
    try {
      context.commit(typeActions.LOGIN_REQUEST);
      // Acessa o store.
      // console.log(context.state.load);
      const userLogged = await ApiGym.login(payload);
      if(userLogged) {
        context.commit(typeActions.LOGIN_SUCCESS, userLogged);
      }
      else {
        context.commit(typeActions.LOGIN_ERROR);
      }
    } catch (error) {
      context.commit(typeActions.LOGIN_ERROR);
    }
  },
  
}

export default actions;