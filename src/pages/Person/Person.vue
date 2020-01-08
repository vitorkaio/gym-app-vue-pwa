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
    </InfoContent>
    <LogoutButton>
      <v-btn 
        style="margin-top: 1rem; width: 100px" 
        color="error" 
        text 
        @click="isLogout"
      >
        Sair
      </v-btn>
    </LogoutButton>
    <ConfirmDialog 
      :dialog="confirmDialog" 
      title="Logout" 
      text="Tem certeza que deseja sair?" 
      :actionConfirmDialog="logout" 
    />
    <EditData 
      :dialogEditData="dialogEditData" 
      :toggleShowEditData="toggleShowEditData" 
    />
  </Container>
</template>

<script>
import { Container, ImgContent, InfoContent, ItemInfo, ItemInfoTitle, ItemInfoText, LogoutButton } from './PersonStyle';
import personal_file_img from '@/assets/personal_data.svg';
import EditData from '@/pages/EditData/EditData';
import { mapActions } from 'vuex';
import * as typeActions from '@/store/modules/auth/typeActions';
import ConfirmDialog from '@/components/Dialogs/Confirm/ConfirmDialog';

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
    EditData,
    LogoutButton,
    ConfirmDialog
  },
  data() {
    return {
      personalImg: personal_file_img,
      dialogEditData: false,
      confirmDialog: false
    }
  },
  methods: {
    ...mapActions('auth', [typeActions.LOGIN_RESET]),
    toggleShowEditData() {
      this.dialogEditData = !this.dialogEditData;
    },
    isLogout() {
      this.confirmDialog = true;
    },
    logout(op) {
      this.confirmDialog = false;
      if (op) {
        this.LOGIN_RESET();
        this.$router.push('/login');
      }
    }
  }
}
</script>

<style>

</style>