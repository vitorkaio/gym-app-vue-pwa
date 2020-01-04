<template>
  <Container>
    <Header :title="headerTitle"></Header>
    <Content>
      <template v-if="screen === 'training'">
        <ListTrainings :trainings="user && user.trainings" :load="userLoad" :error="userError" />
      </template>
      <template v-else-if="screen === 'person'">
        <h3>person</h3>
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

export default {
  components: {
    Container,
    Content,
    Footer,
    Tabs,
    Header,
    ListTrainings
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
    headerTitle() {
      return this.screen === 'training' ? 'Treinos' : 'Dados Pessoais'
    }
  },
  methods: {
    ...mapActions('gym', [typeActions.USER_REQUEST]),
    getUser() {
      this.USER_REQUEST('5e07e08fcb49f0481ab0ce45');
    },
    changeScreen(screen) {
      this.screen = screen;
      console.log(screen);
    }
  },
  async created() {
    try {
     this.getUser();
    } catch (err) {
      this.error = err
    }
  },
}
</script>

<style>

</style>