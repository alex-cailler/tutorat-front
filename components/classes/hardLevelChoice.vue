<template>
  <div class="d-flex align-items-center">
    <span class="text-lg font-weight-bold">Difficulté :</span>
    <div class="d-flex">
      <div>
        <input name="level-radio" id="easy-level-radio" type="radio" checked v-model="selected" class="d-none" value="facile">
        <label class="btn btn-outline-success m-2 btn-sm" for="easy-level-radio">facile</label>
      </div>
      <div>
        <input name="level-radio" id="normal-level-radio" type="radio" v-model="selected" class="d-none" value="normal" />
        <label class="btn btn-outline-warning m-2 btn-sm" for="normal-level-radio">normal</label>
      </div>
      <div>
        <input name="level-radio" id="advance-level-radio" type="radio" v-model="selected" class="d-none" value="difficile" />
        <label class="btn btn-outline-danger m-2 btn-sm" for="advance-level-radio">avancé</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "hardLevelChoice",
  data() {
    return {
      selected: 'facile'
    }
  },
  watch: {
    selected: function(newVal, oldVal) {
      if(newVal !== oldVal)
        this.$emit('input', newVal)
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
input[value="facile"]:checked + label {
  background: $success;
  color: white!important;
}
input[value="normal"]:checked + label {
  background: $warning;
  color: white!important;
}
input[value="difficile"]:checked + label {
  background: $danger;
  color: white!important;
}
</style>
