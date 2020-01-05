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
        <v-btn text color="info"> Mudar Senha</v-btn>
      </ItemInfo>
       <ItemInfo>
        <ItemInfoTitle>Nome </ItemInfoTitle>
        <ItemInfoText>{{ user.info.name }}</ItemInfoText>
      </ItemInfo>
      <v-btn style="margin-top: 1rem; width: 100px" x-small  color="error">Sair</v-btn>
    </InfoContent>
  </Container>
</template>

<script>
import { Container, ImgContent, InfoContent, ItemInfo, ItemInfoTitle, ItemInfoText } from './PersonStyle';
import personal_file_img from '@/assets/personal_file.svg';

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
    ItemInfoText
  },
  data() {
    return {
      personalImg: personal_file_img
    }
  }
}
</script>

<style>

</style>