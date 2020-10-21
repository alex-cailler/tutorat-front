<template>
  <b-card class="shadow">
    <b-form @submit.prevent="">
      <b-card-header>
        <b-card-title>Changer votre mot de passe</b-card-title>
      </b-card-header>
      <b-card-body>
        <base-input class="">

        </base-input>
      </b-card-body>
      <b-card-footer>
        <base-button type="submit">Valider</base-button>
      </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
import BaseButton from "@/components/baseButton";
import BaseInput from "@/components/baseInputs";
export default {
name: "updatePasswordCard",
  components: {BaseInput, BaseButton}
}
</script>

<style scoped>

</style>
