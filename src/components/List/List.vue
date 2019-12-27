<template>
  <Container>
    <div v-for="(item, i) in data" :key="i" :is="component" v-bind="item">
    </div>
  </Container>
</template>

<script>
import { Container } from './ListStyle';

export default {
  props: ['data', 'component'],
  components: {
    Container
  }
}
</script>

<style>

</style>