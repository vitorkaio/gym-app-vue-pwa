<template>
  <v-dialog v-model="dialogEditData" persistent fullscreen >
    <Container>
      <Header title="Editar Senha">
        <template v-slot:left>
          <v-icon :color="accent_color" @click="toggleShowEditData">mdi-arrow-left</v-icon>
        </template>
      </Header>
      <Content>
        <ImgContent>
          <img :src="editDataImg" width="250px" height="250px"/>
        </ImgContent>
        <FormContent>
          <EditDataForm :submit="submit" :cancel="toggleShowEditData" />
        </FormContent>
      </Content>

      <LoadingDialog
        :loading="editPasswordUserLoading"
        title="Atualizando a senha"
      />
      <InfoDialog 
        :infoDialog="passwordNotValid"
        :actionInfoDialog="togglePasswordNotValid"
        title="Error senha"
        text="A senha atual e a nova não são iguais. Tente novamente"
      />
      <ConfirmDialog 
        :dialog="editPasswordUserError"
        :actionConfirmDialog="retryUpdateEditPassword"
        title="Error ao atualizar a senha"
        text="Não foi possível atualizar a senha. Tente novamente"
      />
    </Container>
  </v-dialog>
</template>

<script>
import { Container, Content, ImgContent, FormContent } from './EditDataStyle';
import Header from '@/components/Header/Header';
import { accent_color } from '@/components/styles/colors';
import editDataImg from '@/assets/edit_data.svg';
import EditDataForm from '@/components/Forms/EditDataForm/EditDataForm';
import LoadingDialog from '@/components/Dialogs/Loading/Loading';
import InfoDialog from '@/components/Dialogs/Info/Info';
import ConfirmDialog from '@/components/Dialogs/Confirm/ConfirmDialog';

export default {
  props: {
    dialogEditData: Boolean,
    toggleShowEditData: Function,
    currentPassword: String,
    editPasswordUserLoading: Boolean,
    editPasswordUserError: Boolean,
    editPasswordAction: Function
  },
  components: {
    Container,
    Header,
    Content,
    ImgContent,
    FormContent,
    EditDataForm,
    LoadingDialog,
    InfoDialog,
    ConfirmDialog
  },
  data() {
    return {
      accent_color: accent_color,
      editDataImg: editDataImg,
      height: 100,
      passwordNotValid: false,
      newPasswordState: ''
    }
  },
  methods: {
    submit(newPasswordObject) {
      const { oldPassword, newPassword } = newPasswordObject;
      this.newPasswordState = newPassword;
      if (this.currentPassword === oldPassword) {
        this.editPasswordAction(true, newPassword);
      }
      else {
        this.passwordNotValid = true;
      }
    },
    togglePasswordNotValid() {
      this.passwordNotValid = !this.passwordNotValid;
    },
    retryUpdateEditPassword(op) {
      this.editPasswordAction(op, this.newPasswordState);
    }
  }
}


</script>

<style>

</style>