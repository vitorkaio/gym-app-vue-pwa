/* eslint-disable no-console */
import CryptoJS from 'crypto-js';

const secret = 'fe1a1915a379f3be5394b64d14794932';

class Crypt {

  static cryptData(data) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secret).toString();
  }

  static decryptData(token) {
    if (token) {
      const bytes = CryptoJS.AES.decrypt(token.toString(), secret);
      return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
    }
    return token;
  }

}

export default Crypt;
