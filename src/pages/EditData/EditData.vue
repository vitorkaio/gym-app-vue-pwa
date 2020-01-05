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
    </Container>
  </v-dialog>
</template>

<script>
import { Container, Content, ImgContent, FormContent } from './EditDataStyle';
import Header from '@/components/Header/Header';
import { accent_color } from '@/components/styles/colors';
import editDataImg from '@/assets/edit_data.svg';
import EditDataForm from '@/components/Forms/EditDataForm/EditDataForm';

export default {
  props: {
    dialogEditData: Boolean,
    toggleShowEditData: Function
  },
  components: {
    Container,
    Header,
    Content,
    ImgContent,
    FormContent,
    EditDataForm
  },
  data() {
    return {
      accent_color: accent_color,
      editDataImg: editDataImg,
      height: 100
    }
  },
  methods: {
    submit() {
      this.toggleShowEditData()
    }
  }
}


</script>

<style>

</style>