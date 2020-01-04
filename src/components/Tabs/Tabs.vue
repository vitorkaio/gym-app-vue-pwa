<template>
  <v-bottom-navigation v-model="bottomNav" :color="accent_color" shift grow>
    <v-btn value="training">
      <span>Treinos</span>
      <v-icon>mdi-format-list-bulleted-square</v-icon>
    </v-btn>

    <v-btn value="person">
      <span>Pessoal</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
/* eslint-disable no-console */

import { accent_color } from '@/components/styles/colors';

export default {
  props: {
    screen: {
      type: Function,
      required: true
    },
    default: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      bottomNav: this.default,
      accent_color
    }
  },
  watch: {
    bottomNav() {
      this.screen(this.bottomNav)
    }
  }
}
</script>

<style>

</style>