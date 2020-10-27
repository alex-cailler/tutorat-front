<template>
  <b-card>
    <b-card-header>
      <b-card-title class="text-lg">Vos informations</b-card-title>
    </b-card-header>
    <b-card-body>
      <base-input readonly :value="user.last_name" label="Nom"/>
      <base-input readonly :value="user.first_name" label="Prénom"/>
      <base-input readonly :value="user.email" label="Email"/>
    </b-card-body>
    <b-card-footer>
    </b-card-footer>
  </b-card>
</template>

<script>
import BaseInput from "@/components/baseInputs";
export default {
  name: "userInformation",
  components: {BaseInput},
  props: {
    user: {
      type: Object,
      required: true
    }
  }
}
</script>
