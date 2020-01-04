import axios from 'axios';

const URL = 'http://192.168.1.112:3333';

export const getUser = async (id) => {
  try {
    const user = await axios.get(`${URL}/users/${id}`);
    if (user.data.code === 200) {
      return user.data.data;
    } else {
      throw new Error(null);
    }
  } catch (error) {
    throw (error);
  }
}
