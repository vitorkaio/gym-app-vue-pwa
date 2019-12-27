<template>
  <Container>
    <Header title="Alunos">
      <template #left>
        <v-icon :size="30" :color="accent_color">mdi-menu</v-icon>
      </template>
      <template #right>
        <v-icon :size="30" :color="accent_color">mdi-magnify</v-icon>
      </template>
    </Header>
    <Content>
      <template v-if="usersLoad">
        <h4>Carregando...</h4>
      </template>
      <template v-else>
       <List class="list-users">
         <div v-for="(user, i) in users" :key="i" >
           <Users :data="user" :select="infoUser" />
         </div>
       </List>
      </template>
      <Add :add="addUser" />
    </Content>
  </Container>
</template>

<script>
/* eslint-disable no-console */

import { mapActions, mapGetters } from 'vuex';
import { Container, Content, List } from './AdminStyle';
import Header from '@/components/Header/Header';
import Add from '@/components/ui/Add/Add';
import { accent_color } from '@/components/styles/colors';
import * as typeActions from '@/store/modules/gym/typeActions';
import Users from '@/components/List/ListUser/Users';

export default {
  components: {
    Container,
    Content,
    Header,
    Add,
    List,
    Users
  },
  computed: {
    ...mapGetters('gym',{
      usersLoad: 'usersLoad',
      usersError: 'usersError',
      users: 'getUsers'
    }),
    accent_color() {
      return accent_color;
    }
  },
  methods: {
    ...mapActions('gym', [typeActions.USER_REQUEST]),
    getUsers() {
      this.USER_REQUEST();
    },
    addUser() {
      console.log('Add user');
    },
    infoUser(user) {
      console.log(user);
    }
  },
  async created() {
    try {
     this.getUsers();
    } catch (err) {
      this.error = err
    }
  },
}
</script>

<style>

</style>