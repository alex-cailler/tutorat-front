<template>
  <div class="container-fluid mt-5">
    <b-row>
      <b-col lg="4" sm="6">
        <a target="_blank" href="https://www.beecome.io/">
          <b-card class="shadow">
            <b-card-text
              class="m-0 text-uppercase text-primary text-xs font-weight-bold"
            >Acces direct à</b-card-text>
            <b-card-title class="text-lg m-0">Beecome</b-card-title>
            <b-card-text><font-awesome-icon
              icon="external-link-alt"
              class="mr-2"
            />Cliquez pour y accédez</b-card-text>
          </b-card>
        </a>
      </b-col>
      <b-col lg="4" sm="6">
        <a target="_blank" href="https://mylearningbox.reseau-cd.fr/">
          <b-card class="shadow">
            <b-card-text
              class="m-0 text-uppercase text-primary text-xs font-weight-bold"
            >Acces direct à</b-card-text>
            <b-card-title class="text-lg m-0">MyLearningBox</b-card-title>
            <b-card-text><font-awesome-icon
              icon="external-link-alt"
              class="mr-2"
            />Cliquez pour y accédez</b-card-text>
          </b-card>
        </a>
      </b-col>
      <b-col lg="4" sm="6">
        <b-card class="shadow bg-dark">
          <b-card-text
            class="m-0 text-uppercase text-white text-xs font-weight-bold"
          >
            Date&heure
          </b-card-text>
          <b-card-title class="text-white font-weight-bold m-0">
            {{ time }}
          </b-card-title>
          <b-card-text class="text-uppercase text-white font-weight-bold">
            {{ date }}
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import moment from "moment"
export default {
  name: "TopSection",
  data() {
    return {
      time: null,
      date: null,
    }
  },
  mounted() {
    this.getTimer()
    this.getDateSemantic()
  },
  methods: {
    getDateSemantic() {
      const self = this
      setInterval(function () {
        self.date = moment().format("dddd - dd - MMMM")
      }, 100)
    },
    getTimer() {
      const self = this
      setInterval(function () {
        self.time = moment().format("hh:mm:ss")
      }, 100)
    },
  },
}
</script>

<style scoped></style>
