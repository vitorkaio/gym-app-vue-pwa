<template>
  <Container @click="add()">
    <v-btn class="mx-2" fab dark color="indigo">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
  </Container>
</template>

<script>
import { Container } from './AddStyle';

export default {
  props: {
    add: Function
  },
  components: {
    Container
  }
}
</script>

<style>

</style>