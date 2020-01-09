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
        <v-btn text color="info" @click="toggleShowEditData(false)">Mudar Senha</v-btn>
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
      :currentPassword="userLogged.password" 
      :editPasswordUserLoading="editPasswordUserLoading"
      :editPasswordUserError="editPasswordUserError"
      :editPasswordAction="editPasswordAction"
    />
  </Container>
</template>

<script>
import { Container, ImgContent, InfoContent, ItemInfo, ItemInfoTitle, ItemInfoText, LogoutButton } from './PersonStyle';
import personal_file_img from '@/assets/personal_data.svg';
import EditData from '@/pages/EditData/EditData';
import { mapActions, mapGetters } from 'vuex';
import * as typeActionsUser from '@/store/modules/gym/typeActions';
import * as typeActionsAuth from '@/store/modules/auth/typeActions';
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
  computed: {
    ...mapGetters('auth',{
      userLogged: 'getUserLogged',
    }),
    ...mapGetters('gym', {
      editPasswordSuccess: 'editPasswordSuccess',
      editPasswordUserLoading: 'editPasswordUserLoading',
      editPasswordUserError: 'editPasswordUserError'
    })
  },
  methods: {
    ...mapActions('gym', [typeActionsUser.EDIT_PASSWORD_USER_REQUEST, typeActionsUser.EDIT_PASSWORD_USER_RESET]),
    ...mapActions('auth', [typeActionsAuth.LOGIN_RESET]),
    toggleShowEditData() {
      this.dialogEditData = !this.dialogEditData;
    },
    editPasswordAction(op, password) {
      if (op) {
        if (password.length !== 0) {
          const { id } = this.userLogged;
          this.EDIT_PASSWORD_USER_REQUEST({ id, password });
        }
      }
      else {
        this.EDIT_PASSWORD_USER_RESET();
      }
    },
    isLogout() {
      this.confirmDialog = !this.confirmDialog;
    },
    logout(op) {
      this.isLogout();
      if (op) {
        this.LOGIN_RESET();
        this.$router.push('/login');
      }
    }
  },
  watch: {
    editPasswordSuccess() {
      if (this.editPasswordSuccess) {
        this.EDIT_PASSWORD_USER_RESET();
        this.logout(true);
      }
    }
  }
}
</script>

<style>

</style>