<template>
  <v-dialog v-model="dialogExercises" fullscreen hide-overlay transition="dialog-bottom-transition">
    <Container>
      <Header :title="training.name">
        <template v-slot:left>
          <v-icon :color="accent_color" @click="closeModalExercises">mdi-arrow-left</v-icon>
        </template>
      </Header>
      <Content>
        <ListExercises :exercises="training.exercises" />
      </Content>
      <Footer>
        <v-btn text color="primary" @click="closeModalExercises">Voltar</v-btn>
      </Footer>
    </Container>
  </v-dialog>
</template>

<script>
import { Container, Content, Footer } from './ExercisesStyle';
import Header from '@/components/Header/Header';
import { accent_color } from '@/components/styles/colors';
import ListExercises from '@/components/List/ListExercises/ListExercises';

export default {
  props: {
    dialogExercises: Boolean,
    closeModalExercises: Function,
    training: Object
  },
  components: {
    Container,
    Header,
    Content,
    Footer,
    ListExercises
  },
  data() {
    return {
      accent_color: accent_color
    }
  }
}
</script>

<style>

</style>