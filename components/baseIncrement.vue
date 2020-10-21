<template>
  <div class="increment">
    <b-button @click="up"><font-awesome-icon icon="chevron-up"/></b-button>
    <div>
      {{ value }}
    </div>
    <b-button @click="down"><font-awesome-icon icon="chevron-down"/></b-button>
  </div>
</template>

<script>
export default {
  name: "baseIncrement",
  props: {
    value: Number
  },
  methods: {
    up() {
      this.value++
    },
    down() {
      this.value--
    }
  }
}
</script>

<style scoped>

</style>
