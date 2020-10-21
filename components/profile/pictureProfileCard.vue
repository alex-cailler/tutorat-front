<template>
  <b-card class="shadow">
    <b-card-header>
      <b-card-title class="text-lg">Photo de profile</b-card-title>
    </b-card-header>
    <b-card-body>
      <div class="rounded-circle">
        <img class="h-100 w-100" src="~assets/img/wooman-think.svg">
      </div>
    </b-card-body>
    <b-card-footer>
      <base-button size="small" rounded :loading="loading" @click="testNotif">Editer</base-button>
    </b-card-footer>
  </b-card>
</template>

<script>
import BaseButton from "@/components/baseButton";

export default {
name: "pictureProfileCard",
  components: {BaseButton},
  data() {
    return {
      loading: false
    }
  },
  methods: {
    testNotif() {
      this.$store.dispatch('notifications/addNotification', {
        type: 'danger',
        message: 'Erreur lors de la motification de la photo de profile'
      }, {root: true})
    }
  }
}
</script>

<style scoped>

</style>
