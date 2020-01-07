<template>
  <v-dialog
    v-model="infoDialog"
    max-width="290"
    persistent
  >
    <v-card>
      <v-card-title class="headline">{{ title }}</v-card-title>

      <v-card-text>
        {{ text }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="success"
          text
          @click="actionInfoDialog(true)"
        >
          Ok
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    infoDialog: Boolean,
    actionInfoDialog: Function,
    title: String,
    text: String
  }
}
</script>

<style>

</style>