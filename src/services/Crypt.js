/* eslint-disable no-console */
import Cryptr from 'cryptr';

const cryptr = new Cryptr('123');

class Crypt {

  static cryptData(data) {
    return cryptr.encrypt(data);
  }

  static decryptData(data) {
    return cryptr.decrypt(data);
  }

}

export default Crypt;
