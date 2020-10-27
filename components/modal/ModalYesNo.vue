<template>
  <b-modal
    v-model="value"
    centered
    hide-footer
    hide-header
    @change="$emit('input', $event)"
  >
    <b-card-body>
      <b-card-title class="text-xl text-center">
        {{ message ? message : "Etes vous sur ?" }}
      </b-card-title>
      <div class="text-center">
        <b-button
          class="rounded-lg"
          size="sm"
          variant="danger"
          @click="$emit('input', false)"
        >
          Annulé
        </b-button>
        <b-button
          class="rounded-lg"
          size="sm"
          variant="success"
          @click="$emit('confirm', true)"
        >
          Confirmé
        </b-button>
      </div>
    </b-card-body>
  </b-modal>
</template>

<script>
export default {
  name: "ModalYesNo",
  props: {
    value: Boolean,
    message: String,
  },
  data() {
    return {
      valUp: false,
    }
  },
  watch: {
    valueUp: function (newVal) {
      this.valUp = newVal
    },
  },
}
</script>
