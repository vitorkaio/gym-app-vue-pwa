import axios from 'axios';
import Crypt from '../Crypt';

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

// Faz o login no app. Em caso de sucesso, retorna um obj contendo username, password e o id
// caso contrário retorna null.
export const login = async ({ username, password }) => {
  try {
    const id = await axios.post(`${URL}/auth/login`, { username, password })
    if (id.data.code === 200) {
      const data = {
        id: id.data.data,
        username,
        password
      }
      return Crypt.cryptData(data);
    }
    else {
      throw new Error(null)
    }
  } catch (error) {
    throw (error)
  }
}
