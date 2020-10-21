<template>
  <div class="container mt-5 pb-5">
    <b-row class="justify-content-center">
      <b-col lg="9" md="7">
        <b-card class="bg-lighter border-0 mb-0">
          <b-card-header class="bg-transparent">
            <div class="font-weight-bold text-lg text-primary mt-2 mb-2">Crée votre cours !</div>
          </b-card-header>
          <b-card-body class="px-lg-5 py-lg-5">
            <form
              role="form"
              @submit.prevent="handleLoginSubmit()">
              <base-search label="Nom de la matière"
                           :array="mattersList"
                           @getResultSelected="form.matter_id = $event"
              />
              <base-input
                label="Adresse / Nom du batiment"
                v-model="form.address"
                name="mot de passe"
                class="mb-3"
                type="text"
                placeholder="Adresse"/>
              <base-input
                label="Numéro de la salle"
                v-model="form.room_nbr"
                name="roomNbr"
                class="mb-3"
                type="number"
                placeholder="Numéro de la salle"/>
              <base-input
                label="Nombre de place"
                v-model="form.place_available_nbr"
                name="placeNbrAvailable"
                class="mb-3"
                type="number"
                min="0"
                placeholder="nombre de place"/>
              <b-form-group class="mb-3 w-100">
                <label class="form-control-label">
                  Définissez une date
                </label>
                <v-date-picker v-model="date" show-caps :columns="$screens({ default: 1, lg: 2 })" :input-props='{class: "mb-3 form-control"}'/>
              </b-form-group>
              <b-form-group class="mb-3 w-100">
                <label class="form-control-label">
                  Définissez une heure
                </label>
                <VueTimepicker v-model="time" close-on-complete advanced-keyboard input-class="form-control bg-white w-100 border-0" value="" class="form-control w-100" :minute-interval="5"/>
              </b-form-group>
              <hard-level-choice v-model="form.level" />
              <div class="text-right">
                <base-button
                  :disabled="loggingIn"
                  type="submit"
                  rounded
                  tag="button"
                  size="large"
                  class="my-4">Ajouter</base-button>
              </div>
            </form>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BaseButton from "@/components/baseButton";
import BaseInput from "@/components/baseInputs";
import HardLevelChoice from "@/components/classes/hardLevelChoice";
import BaseTimePicker from "@/components/baseTimePicker";
import BaseSearch from "@/components/baseSearch";
import VueTimepicker from 'vue2-timepicker/src'
import moment from 'moment'

export default {
  name: "addClassesForm",
  components: {BaseSearch, BaseTimePicker, HardLevelChoice, BaseButton, BaseInput, VueTimepicker},
  data() {
    return {
      mattersList: [],
      results: [],
      time: '00:00:00',
      date: new Date,
      form: {
        matter: '',
        address: '',
        date: new Date(),
        place_available_nbr: parseInt("010"),
        room_nbr: 0,
        level: 'facile',
        matter_id: null,
        teacher_id: this.$auth.user.id
      },
    }
  },
  computed: {
    loggingIn() {
      return Object.keys(this.form).every(i => this.form[i] !== '')
    }
  },
  methods: {
    handleLoginSubmit () {
      this.form.date = moment(this.form.date).format('YYYY-MM-DD') + ' ' + this.time + ':00'
      this.$api.classe.create(this.form).then(() => {
        this.$store.dispatch('notifications/addNotification', {type: 'success' , message: 'Ajout du cours avec success'})
        this.$router.push('/t/classes')
      })
      .catch(() => {
        this.$store.dispatch('notifications/addNotification', {type: 'danger' , message: 'Une erreur est survenue'})
      })
    }
  },
  mounted() {
    this.$api.matter.list().then(r => this.mattersList = r)
  }
}
</script>

<style scoped>

</style>
