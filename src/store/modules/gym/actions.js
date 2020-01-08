import * as typeActions from './typeActions';
import * as ApiGym from '@/services/apiGym/ApiGym';

/* eslint-disable */

const actions = {

  async [typeActions.USER_REQUEST](context, payload) {
    try {
      context.commit(typeActions.USER_REQUEST);
      // Acessa o store.
      // console.log(context.state.load);
      const user = await ApiGym.getUser(payload);
      if(user) {
        context.commit(typeActions.USER_SUCCESS, user);
      }
      else {
        context.commit(typeActions.USER_ERROR);
      }
    } catch (error) {
      context.commit(typeActions.USER_ERROR);
    }
  },

  async [typeActions.USER_ERROR](context) {
    context.commit(typeActions.USER_ERROR);
  }
  
}

export default actions;