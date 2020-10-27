<template>
  <div v-click-outside="closeCard">
    <div @click="isOpen = true">
      <base-input
        v-model="input"
        :label="label"
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
      <b-card
        v-if="results.length > 0 && isOpen"
        class="position-absolute w-100 card-res p-0 shadow"
        style="z-index: 50"
        body-class="p-0"
      >
        <div v-for="(res, key) in results"
             :key="key"
             class="p-3 item"
             @click="setResult(res)"
        >
          {{ res.libel }}
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/baseInputs"
export default {
  name: "BaseSearch",
  components: { BaseInput },
  props: {
    array: {
      type: Array,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      input: "",
    }
  },
  methods: {
    closeCard() {
      this.isOpen = false
    },
    search() {
      if (this.input.length > 0)
        this.results = this.array.filter((r) =>
          r.libel
            .toLowerCase()
            .match(new RegExp(this.input.toLowerCase() + ".*"))
        )
      else this.results = []
    },
    setResult(item) {
      this.input = item.libel
      this.$emit("getResultSelected", item.id)
      this.isOpen = false
    },
  },
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
