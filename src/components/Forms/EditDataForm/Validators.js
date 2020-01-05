/* eslint-disable no-console */

class Validators {

  static oldPasswordRules() {
    return {
      required: value => !!value || 'Não pode ser vazio',
      min: v => v.length >= 4 || 'Min 4 carácteres',
    }
  }

  static newPasswordRules() {
    return {
      required: value => !!value || 'Não pode ser vazio',
      min: v => v.length >= 4 || 'Min 4 carácteres',
    }
  }

  static confirmPasswordRules(newPasswrod) {
    return {
      required: value => !!value || 'Não pode ser vazio',
      min: v => v.length >= 4 || 'Min 4 carácteres',
      verify: value => value === newPasswrod ? true : 'As senhas não são iguais'
    }
  }


}

export default Validators;
