<template>
  <Container>
    <Header :title="headerTitle"></Header>
    <Content>
      <template v-if="screen === 'training'">
        <ListTrainings :trainings="user && user.trainings" :load="userLoad" :error="userError" />
      </template>
      <template v-else-if="screen === 'person'">
        <Person :user="user" />
      </template>
    </Content>
    <Footer>
      <Tabs :screen="changeScreen" :default="screen"/>
    </Footer>
  </Container>
</template>

<script>
/* eslint-disable no-console */

import { Container, Content, Footer } from './HomeStyle';
import { mapActions, mapGetters } from 'vuex';
import * as typeActions from '@/store/modules/gym/typeActions';
import Tabs from '@/components/Tabs/Tabs';
import Header from '@/components/Header/Header';
import ListTrainings from '@/components/List/ListTrainings/ListTrainings';
import Person from '@/pages/Person/Person';

export default {
  components: {
    Container,
    Content,
    Footer,
    Tabs,
    Header,
    ListTrainings,
    Person
  },
  data() {
    return {
      screen: 'training'
    }
  },
  computed: {
    ...mapGetters('gym',{
      userLoad: 'userLoad',
      userError: 'userError',
      user: 'getUser'
    }),
    ...mapGetters('auth',{
      userLogged: 'getUserLogged',
    }),
    headerTitle() {
      return this.screen === 'training' ? 'Treinos' : 'Dados Pessoais'
    }
  },
  methods: {
    ...mapActions('gym', [typeActions.USER_REQUEST, typeActions.USER_ERROR]),
    getUser() {
      if (this.userLogged) {
        this.USER_REQUEST(this.userLogged.id);
      }
      else {
        this.USER_ERROR();
        this.$router.push('/login');
      }
    },
    changeScreen(screen) {
      this.screen = screen;
    }
  },
  async created() {
    try {
      this.getUser();
    } catch (err) {
      this.error - err;
    }
  },
}
</script>

<style>

</style>