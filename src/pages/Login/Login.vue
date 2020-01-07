<template>
  <Container>
    <ImgContent>
      <img :src="loginImg" width="90%" height="90%"/>
    </ImgContent>
    <Content>
      <LoginForm :submit="login" />
    </Content>
    <Loading :loading="loginLoad" title="Entrando" />
    <Info :infoDialog="loginError" :actionInfoDialog="actionInfoDialog"
     title="Error" text="Login/Senha inválido" />
  </Container>
</template>

<script>
import { Container, ImgContent, Content } from './LoginStyle';
import loginImg from '@/assets/login.svg';
import LoginForm from '@/components/Forms/LoginForm/LoginForm';
import { mapActions, mapGetters } from 'vuex';
import * as typeActions from '@/store/modules/auth/typeActions';
import Loading from '@/components/Dialogs/Loading/Loading';
import Info from '@/components/Dialogs/Info/Info';

export default {
  components: {
    Container,
    ImgContent,
    Content,
    LoginForm,
    Loading,
    Info
  },
  data() {
    return {
      loginImg: loginImg,
    }
  },
  computed: {
    ...mapGetters('auth',{
      loginLoad: 'loginLoad',
      loginError: 'loginError',
      userLogged: 'getUserLogged'
    }),
  },
  methods: {
    ...mapActions('auth', [typeActions.LOGIN_REQUEST, typeActions.LOGIN_RESET]),
    login(username, password) {
      this.LOGIN_REQUEST({ username, password });
      // this.$router.push('/');
    },
    actionInfoDialog() {
      this.LOGIN_RESET();
    },
  },
  watch: {
    userLogged() {
      if (this.userLogged) {
        this.$router.push('/');
      }
    }
  },
  async created() {
    if (this.userLogged) {
      this.$router.push('/');
    }
  }
}
</script>

<style>

</style>