<template>
  <Container>
    <ImgContent>
      <img :src="personalImg" width="90%" height="90%"/>
    </ImgContent>
    <InfoContent>
      <ItemInfo>
        <ItemInfoTitle>Username</ItemInfoTitle>
        <ItemInfoText>{{ user.username }}</ItemInfoText>
      </ItemInfo>
       <ItemInfo>
        <ItemInfoTitle>Senha </ItemInfoTitle>
        <v-btn text color="info" @click="toggleShowEditData">Mudar Senha</v-btn>
      </ItemInfo>
       <ItemInfo>
        <ItemInfoTitle>Nome </ItemInfoTitle>
        <ItemInfoText>{{ user.info.name }}</ItemInfoText>
      </ItemInfo>
      <v-btn style="margin-top: 1rem; width: 100px" x-small color="error" @click="logout">Sair</v-btn>
    </InfoContent>
    
    <EditData :dialogEditData="dialogEditData" :toggleShowEditData="toggleShowEditData" />
  </Container>
</template>

<script>
import { Container, ImgContent, InfoContent, ItemInfo, ItemInfoTitle, ItemInfoText } from './PersonStyle';
import personal_file_img from '@/assets/personal_data.svg';
import EditData from '@/pages/EditData/EditData';
import { mapActions } from 'vuex';
import * as typeActions from '@/store/modules/auth/typeActions';

export default {
  props: {
    user: Object
  },
  components: {
    Container,
    ImgContent,
    InfoContent,
    ItemInfo,
    ItemInfoTitle,
    ItemInfoText,
    EditData
  },
  data() {
    return {
      personalImg: personal_file_img,
      dialogEditData: false
    }
  },
  methods: {
    ...mapActions('auth', [typeActions.LOGIN_RESET]),
    toggleShowEditData() {
      this.dialogEditData = !this.dialogEditData;
    },
    logout() {
      this.LOGIN_RESET();
      this.$router.push('/login');
    }
  }
}
</script>

<style>

</style>