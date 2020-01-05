<template>
  <Container>
    <InputForms id="app" @submit="onSubmit">
      <InputItem>
        <v-text-field
          outlined
          style="width: 100%"
          label="Senha Atual"
          type="password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="[rules.required, rules.min]"
        ></v-text-field>
      </InputItem>
      
     <InputItem>
        <v-text-field
          outlined
          style="width: 100%"
          label="Senha Atual"
          type="password"
          prepend-inner-icon="mdi-lock-outline"
        ></v-text-field>
      </InputItem>

 <InputItem>
        <v-text-field
          outlined
          style="width: 100%"
          label="Senha Atual"
          type="password"
          prepend-inner-icon="mdi-lock-outline"
        ></v-text-field>
      </InputItem>

      <input
        type="submit"
        hidden
      >
    </InputForms>
    <ActionsForms>
      <v-btn text color="error" @click="cancel">Cancelar</v-btn>
      <v-btn text color="success" @click="onSubmit">Ok</v-btn>
    </ActionsForms>
  </Container>
</template>

<script>
import { Container, InputForms, ActionsForms, InputItem } from './EditDataFormStyle';

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
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 4 || 'Min 4 carácteres',
      },
    }
  },
  methods: {
    onSubmit(e) {
      this.submit();
      e.preventDefault();
    }
  }
}
</script>

<style>

</style>