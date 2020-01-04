<template>
  <Container > 
    <template v-if="load">
      <h3>Carregando</h3>
    </template>
    <ListWrapper v-else>
      <v-list>
        <v-list-item v-for="(training, index) in dataTranings" 
          :key="training._id" 
          v-long-press="400" 
          @long-press-start="trainingDone"
          @click="trainingDone"
        >
          <v-list-item-avatar>
            <v-img :src="user_img"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="training.name"></v-list-item-title>
            <v-list-item-subtitle v-text="training.exercises.length + ' exercícios - Segunda-Feira'"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color=" index !== 0 ? 'warning' : 'info'">{{ index !== 0 ? 'mdi-clock-outline' : 'mdi-check'}}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <ConfirmDialog :dialog='dialog' 
        :actionConfirmDialog="actionEditTrainings" 
        text="Tem certeza que quer Finalizar o treino?"
      />
    </ListWrapper>
  </Container>
</template>

<script>
/* eslint-disable no-console */

import { Container, ListWrapper } from './ListTrainingsStyle';
import user_img from '@/assets/training.svg';
import { accent_color } from '@/components/styles/colors';
import LongPress from 'vue-directive-long-press';
import ConfirmDialog from '@/components/Dialogs/Confirm/ConfirmDialog';

export default {
  props: {
    trainings: Array,
    load: Boolean,
    error: Boolean
  },
  components: {
    Container,
    ListWrapper,
    ConfirmDialog
  },
  directives: {
    'long-press': LongPress
  },
  data() {
    return {
      dataTranings: this.trainings,
      dialog: false
    }
  },
  computed: {
    user_img() {
      return user_img;
    },
    accent_color() {
      return accent_color;
    }
  },
  methods: {
    trainingDone() {
      this.dialog = true;
    },
    actionEditTrainings(op) {
      if (op) {
        const newTrainings = [...this.dataTranings];
        const tr = newTrainings.shift();
        newTrainings.push(tr);
        this.dataTranings = [...newTrainings];
        this.dialog = false;
      }
      else {
        this.dialog = false;
      }
    }
  },
  updated() {
    if (!this.dataTranings) {
      this.dataTranings = this.trainings;
      console.log('update');
    }
  }
}
</script>

<style>

</style>