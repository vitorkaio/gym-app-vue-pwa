<template>
  <Container>
    <InputForms id="app" @submit="onSubmit">
      <InputItem>
        <v-text-field v-model="oldPassword"
          outlined
          style="width: 100%"
          label="Senha Atual"
          type="password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="[oldPasswordRules.required, oldPasswordRules.min]"
        ></v-text-field>
      </InputItem>
      
      <InputItem>
        <v-text-field v-model="newPassword"
          outlined
          style="width: 100%"
          label="Nova Senha"
          type="password"
          prepend-inner-icon="mdi-lock-question"
          :rules="[newPasswordRules.required, newPasswordRules.min]"
        ></v-text-field>
      </InputItem>

      <InputItem>
        <v-text-field v-model="confirmPassword"
          outlined
          style="width: 100%"
          label="Confirmar a nova senha"
          type="password"
          prepend-inner-icon="mdi-lock-alert"
          :rules="[confirmPasswordRules().required, confirmPasswordRules().min, confirmPasswordRules(newPassword).verify]"
        ></v-text-field>
      </InputItem>

      <input
        type="submit"
        hidden
      >
    </InputForms>
    <ActionsForms>
      <v-btn text color="error" @click="onCancel">Cancelar</v-btn>
      <v-btn text color="success" @click="onSubmit">Ok</v-btn>
    </ActionsForms>
  </Container>
</template>

<script>
import { Container, InputForms, ActionsForms, InputItem } from './EditDataFormStyle';
import Validators from './Validators';

export default {
  props: {
    submit: Function,
    cancel: Function
  },

  components: {
    Container,
    InputForms,
    ActionsForms,
    InputItem
  },
  data() {
    return {
      oldPasswordRules: Validators.oldPasswordRules(),
      newPasswordRules: Validators.newPasswordRules(),
      confirmPasswordRules: Validators.confirmPasswordRules,
      oldPassword: '',
      newPassword: '',
      confirmPassword: ''
    }
  },
  methods: {
    resetFields() {
      this.oldPassword = '',
      this.newPassword = '',
      this.confirmPassword = ''
    },
    onSubmit(e) {
      if (this.oldPassword.length !== 0 && this.newPassword.length !== 0 && this.confirmPassword.length !== 0) {
        const changePassword = {
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
          confirmPassword: this.confirmPassword
        }
        // this.resetFields();
        this.submit(changePassword);
      }
      e.preventDefault();
    },
    onCancel() {
      this.resetFields();
      this.cancel(false);
    }
  }
}
</script>

<style>

</style>