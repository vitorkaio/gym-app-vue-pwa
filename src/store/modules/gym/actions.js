import * as typeActions from './typeActions';
import ApiGym from '@/services/apiGym/ApiGym';

/* eslint-disable */

const actions = {

  async [typeActions.USER_REQUEST](context) {
    try {
      context.commit(typeActions.USER_REQUEST);
      // Acessa o store.
      // console.log(context.state.load);
      const apiGym = await ApiGym;
      const users = await apiGym.getClient().getUsers();
      
      if(users) {
        context.commit(typeActions.USER_SUCCESS, users);
      }
      else {
        context.commit(typeActions.USER_ERROR);
      }
    } catch (error) {
      context.commit(typeActions.USER_ERROR);
    }
  },
  
}

export default actions;