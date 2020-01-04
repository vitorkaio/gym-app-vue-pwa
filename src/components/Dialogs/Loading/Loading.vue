<template>
  <v-dialog
    v-model="loading"
    max-width="290"
    persistent
  >
    <v-card>
      <v-card-title class="title-cards" >{{ title }}</v-card-title>

      <v-card-text class="loadings">
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        ></v-progress-circular>
      </v-card-text>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    title: String
  }
}
</script>

<style>

.title-cards {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loadings {
  margin-top: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>