<template>
  <Container>
    <Content>
      <h3>Login Form</h3>
    </Content>
    <Footer>
      <v-btn color="primary" block height="100%"><span style="color: black">Entrar</span></v-btn>
    </Footer>
  </Container>
</template>

<script>
import { Container, Content, Footer } from './LoginFormStyle';

export default {
  components: {
    Container,
    Content,
    Footer
  }

}
</script>

<style>

</style>