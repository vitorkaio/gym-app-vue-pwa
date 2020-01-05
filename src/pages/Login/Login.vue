<template>
  <Container>
    <ImgContent>
      <img :src="loginImg" width="90%" height="90%"/>
    </ImgContent>
    <Content>
      <LoginForm />
    </Content>
  </Container>
</template>

<script>
import { Container, ImgContent, Content } from './LoginStyle';
import loginImg from '@/assets/login.svg';
import LoginForm from '@/components/Forms/LoginForm/LoginForm';

export default {
  components: {
    Container,
    ImgContent,
    Content,
    LoginForm
  },
  data() {
    return {
      loginImg: loginImg
    }
  },
  methods: {
    login() {
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>