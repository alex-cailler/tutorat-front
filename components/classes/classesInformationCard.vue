<template>
  <b-card>
    <b-card-header>
      <b-card-title class="text-lg"> Information </b-card-title>
    </b-card-header>
    <b-card-body>
      <div class="justify-content-between d-flex">
        <span>Ajouter le :</span>
        <span>{{ moment(details.created_at).format("DD-MM-YYYY") }}</span>
      </div>
      <div class="justify-content-between d-flex">
        <span>Nombre de place disponible</span>
        <span>{{ details.place_available_nbr }}</span>
      </div>
      <div class="d-flex justify-content-between">
        <span>{{ details.teacher.first_name }}
          {{ details.teacher.last_name }}</span>
        <a :href="`mailto:${details.teacher.email}`" target="_blank">{{
          details.teacher.email
        }}</a>
      </div>
      <div class="d-flex justify-content-between">
        <span>Lieu:</span>
        <span>{{ details.address }} {{ details.room_nbr }}</span>
      </div>
    </b-card-body>
    <b-card-footer>
      <b-button
        v-if="!details.iSub"
        variant="success"
        @click="subscribe(details.id, $auth.user.id)"
      >
        Je participe !
      </b-button>
      <b-button
        v-else
        variant="danger"
        @click="unsubscribe(details.id, $auth.user.id)"
      >
        Je me désinscris !
      </b-button>
    </b-card-footer>
  </b-card>
</template>

<script>
import moment from "moment"

export default {
  name: "LClassesInformationCard",
  props: {
    details: {
      type: Object,
    },
  },
  data() {
    return {
      moment,
    }
  },
  methods: {
    subscribe(classe_id, user_id) {
      this.$api.participant
        .create({ classe_id, user_id })
        .then((r) => (this.details.iSub = true))
    },
    unsubscribe(classe_id, user_id) {
      this.$api.participant
        .remove(classe_id, user_id)
        .then((r) => (this.details.iSub = false))
    },
  },
}
</script>
