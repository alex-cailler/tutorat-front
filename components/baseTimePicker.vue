<template>
  <VueTimepicker
    close-on-complete
    advanced-keyboard
    input-class="form-control bg-white w-100 border-0"
    class="form-control w-100"
    @change="$emit('change', $event)"
  />
</template>

<script>
import VueTimepicker from "vue2-timepicker/src"

export default {
  name: "BaseTimePicker",
  components: { VueTimepicker },
  data() {
    return {
      hour: 0,
      min: 0,
    }
  },
  watch: {
    hour: function (newVal) {
      console.log(newVal)
    },
    min: function (newVal) {
      console.log(newVal)
    },
  },
}
</script>
