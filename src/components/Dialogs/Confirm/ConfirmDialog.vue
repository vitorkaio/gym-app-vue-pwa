<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
    persistent
  >
    <v-card>
      <v-card-title class="headline">Confirmar</v-card-title>

      <v-card-text>
        {{ text }}
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="error"
          text
          @click="actionConfirmDialog(false)"
        >
          Cancelar
        </v-btn>

        <v-btn
          color="success"
          text
          @click="actionConfirmDialog(true)"
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
    dialog: Boolean,
    actionConfirmDialog: Function,
    text: String
  }
}
</script>

<style>

</style>