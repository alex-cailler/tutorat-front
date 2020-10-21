<template>
  <div v-click-outside="closeCard">
    <div @click="isOpen = true">
      <base-input
        :label="label"
        v-model="input"
        name="email"
        class="mb-3"
        type="text"
        placeholder="intitule"
        autocapitalize="none"
        autocomplete="off"
        @input="search"
      />
    </div>
    <div class="position-relative">
      <b-card class="position-absolute w-100 card-res p-0 shadow" style="z-index: 50" v-if="results.length > 0 && isOpen" body-class="p-0">
        <div class="p-3 item" v-for="res in results" @click="setResult(res)">{{ res.libel }}</div>
      </b-card>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/baseInputs";
export default {
  name: "baseSearch",
  components: {BaseInput},
  props: {
    array: {
      type: Array,
    },
    label: {
      type: String,
    }
  },
  data() {
    return {
      isOpen: false,
      results: [],
      input: ''
    }
  },
  methods: {
    closeCard() {
      this.isOpen = false
    },
    search() {
      if (this.input.length > 0)
        this.results = this.array.filter(r => r.libel.toLowerCase().match(new RegExp(this.input.toLowerCase() + ".*")))
      else
        this.results = []
    },
    setResult(item) {
      this.input = item.libel
      this.$emit('getResultSelected', item.id)
      this.isOpen = false
    }
  }
}
</script>

<style lang="scss" scoped>
  .card-res {
    transition: all ease-in-out 0.25s;
  }
  .item {
    cursor: pointer;
  }
  .item:hover {
    background: #eeeeee;
    transition: all ease-in-out 0.25s;
  }
</style>
