<template>
  <div class="container h-75">
    <b-row>
      <b-col md="6">
        <h1 class="h0 text-primary mb-5 w-100" style="line-height: 108.9%">
          Bienvenue sur votre espace
          <span class="text-secondary">tutorat</span> !
        </h1>
        <div>
          <p class="mb-5 w-75">
            Cette plateforme, pour étudiant est faites pour que toutes personnes
            puissent s’inscrire et suivre des cours par d’autre personnes, et ce
            gratuitement !
          </p>
          <base-button
            rounded
            size="large"
            @click="$router.push('/t/dashboard')"
          >
            Acceder au site
          </base-button>
        </div>
      </b-col>
      <b-col md="6">
        <img
          src="~assets/img/wooman-think.svg"
          class="embed-responsive d-none d-md-block"
        >
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BaseButton from "~/components/baseButton"
export default {
  name: "TopSection",
  components: { BaseButton },
}
</script>

<style scoped></style>
