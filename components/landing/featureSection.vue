<template>
  <div class="container" style="margin-top: 40vh">
    <div>
      <h1 class="text-center text-primary font-weight-bold">Caracteristique</h1>
      <p
        class="mb-5 mt-5 text-center mr-auto ml-auto"
        style="max-width: 500px !important"
      >
        Les fonctionalitées présentent ci-dessous peuvent être en cours de
        dévelopement et donc être indisponible pour le moment.
      </p>
    </div>
    <b-row style="margin-top: 100px; margin-bottom: 100px">
      <b-col v-for="(item, key) in items" :key="key" lg="4">
        <b-card>
          <b-card-title class="text-primary">
            {{ item.title }}
          </b-card-title>
          <b-card-text>{{ item.description }}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FeatureSection",
  data() {
    return {
      items: [
        {
          title: "Planifié",
          description:
            "Les fonctionalitées présentent ci-dessous peuvent être en cours de dévelopement et donc être indisponible pour le moment.",
        },
        {
          title: "Participer",
          description:
            "Les fonctionalitées présentent ci-dessous peuvent être en cours de dévelopement et donc être indisponible pour le moment.",
        },
        {
          title: "Rencontre",
          description:
            "Les fonctionalitées présentent ci-dessous peuvent être en cours de dévelopement et donc être indisponible pour le moment.",
        },
      ],
    }
  },
}
</script>

<style scoped></style>
