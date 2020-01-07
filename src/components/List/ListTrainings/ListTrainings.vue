<template>
  <Container > 
    <template v-if="load">
      <Loading :loading="load" title="Carregando Treinos" />
    </template>
    <ListWrapper v-else>
      <v-list>
        <v-list-item v-for="(training, index) in dataTranings"
          :key="training._id" 
          v-long-press="400" 
          @long-press-start="index !== 0 ? null : trainingDone()"
          @click="showListExercises(training)"
        >
          <v-list-item-avatar>
            <v-img :src="user_img"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-text="training.name"></v-list-item-title>
            <v-list-item-subtitle v-text="training.exercises.length + ' exercícios'"></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-icon>
            <v-icon :color=" index !== 0 ? 'warning' : 'success'">{{ index !== 0 ? 'mdi-clock-outline' : 'mdi-check'}}</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list>
      <ConfirmDialog :dialog='dialog' 
        :actionConfirmDialog="actionEditTrainings" 
        text="Deseja finalizar o treino?"
      />
      <Exercises :dialogExercises="dialogExercises" 
        :training="training"
        :closeModalExercises="closeModalExercises"
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
import Loading from '@/components/Dialogs/Loading/Loading';
import Exercises from '@/pages/Exercises/Exercises';
import TrainingServices from '@/services/TrainingServices';

export default {
  props: {
    trainings: Array,
    load: Boolean,
    error: Boolean
  },
  components: {
    Container,
    ListWrapper,
    ConfirmDialog,
    Loading,
    Exercises
  },
  directives: {
    'long-press': LongPress
  },
  data() {
    return {
      dataTranings: this.trainings,
      dialog: false,
      dialogExercises: false,
      training: {}
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
        TrainingServices.saveTraining(newTrainings[0]._id);
        this.dataTranings = [...newTrainings];
        this.dialog = false;
      }
      else {
        this.dialog = false;
      }
    },
    showListExercises(tr) {
      this.training = tr;
      this.dialogExercises = true;
    },
    closeModalExercises() {
      this.dialogExercises = false;
    }
  },
  updated() {
    if (!this.dataTranings) {
      const id = TrainingServices.getTraining();
      if (id) {
        this.dataTranings = TrainingServices.orderList(id, [...this.trainings]);
      }
      else {
        this.dataTranings = this.trainings;
      }
    }
  }
}
</script>

<style>

</style>