/* eslint-disable no-console */
import { encode, decode } from 'jwt-simple';

const secret = 'fe1a1915a379f3be5394b64d14794932';

class Crypt {

  static cryptData(data) {
    return encode(data, secret);
  }

  static decryptData(token) {
    return token ? decode(token, secret) : token;
  }

}

export default Crypt;
