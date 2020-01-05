<template>
  <Container>
    <Content @submit="onSubmit">
      <InputItem>
        <v-text-field v-model="username"
          outlined
          style="width: 100%"
          label="Username"
          type="text"
          prepend-inner-icon="mdi-account"
          :rules="[rules.required]"
        ></v-text-field>
      </InputItem>
      <InputItem>
        <v-text-field v-model="password"
          outlined
          style="width: 100%"
          label="Senha"
          type="password"
          prepend-inner-icon="mdi-lock-outline"
          :rules="[rules.required]"
        ></v-text-field>
      </InputItem>
      <input
        type="submit"
        hidden
      >
    </Content>
    <Footer>
      <v-btn color="primary" block height="100%" @click="onSubmit"><span style="color: black">Entrar</span></v-btn>
    </Footer>
  </Container>
</template>

<script>
import { Container, Content, Footer, InputItem } from './LoginFormStyle';

export default {
  components: {
    Container,
    Content,
    Footer,
    InputItem
  },
  data() {
    return {
      username: '',
      password: '',
      rules: {
        required: value => !!value || 'Não pode ser vazio',
      }
    }
  },
  methods: {
    onSubmit(e) {
      // eslint-disable-next-line no-console
      console.log(this.username, this.password);
      e.preventDefault();
    }
  }

}
</script>

<style>

</style>