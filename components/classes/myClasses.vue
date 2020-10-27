<template>
  <b-row>
    <b-col sm="3" v-for="(classe, key) in classes" :key="key">
      <b-card class="shadow-lg">
        <div class="text-lg text-center font-weight-bold">
          {{ classe.libel }}
        </div>
        <div class="text-center">
          {{ classe.level }}
        </div>
        <div class="text-center">
          {{ moment(classe.date).format('dddd DD MMMM') }}
        </div>
        <div class="text-center mt-2">
          <b-btn size="sm" variant="primary" @click="$router.push('/t/classes/details?id='+classe.id)">Voir</b-btn>
        </div>
      </b-card>
    </b-col>
  </b-row>
</template>

<script>

import moment from 'moment'
import BaseButton from "@/components/baseButton";

export default {
  name: "myClasses",
  components: {BaseButton},
  data() {
    return {
      moment: moment,
      classes: null
    }
  },
  async mounted() {
    this.classes = await this.$api.participant.myClasses();
  }
}
</script>
