<template>
  <b-card class="shadow">
    <b-form ref="form" @submit.prevent="handleUpdatePassword">
      <b-card-header>
        <b-card-title class="text-lg">
          Changer votre mot de passe
        </b-card-title>
      </b-card-header>
      <b-card-body>
        <base-input
          name="password_actual"
          class="mb-3"
          type="text"
          readonly
          placeholder="Mot de passe actuel"
          value="***********"
        />
        <base-input
          v-model="form.current_password"
          name="current_password"
          class="mb-3"
          type="password"
          placeholder="Mot de passe actuel"
        />
        <base-input
          v-model="form.new_password"
          name="new_password"
          class="mb-3"
          type="password"
          placeholder="Nouveau mot de passe"
        />
        <base-input
          v-model="form.new_confirm_password"
          name="new_confirm_password"
          class="mb-3"
          type="password"
          placeholder="Confirmation nouveau mot de passe"
        />
      </b-card-body>
      <b-card-footer>
        <base-button rounded size="small" type="submit"> Valider </base-button>
      </b-card-footer>
    </b-form>
  </b-card>
</template>

<script>
import BaseButton from "@/components/baseButton"
import BaseInput from "@/components/baseInputs"
export default {
  name: "UpdatePasswordCard",
  components: { BaseInput, BaseButton },
  data() {
    return {
      form: {
        current_password: "",
        new_password: "",
        new_confirm_password: "",
      },
    }
  },
  methods: {
    handleUpdatePassword() {
      this.$api.security
        .updatePassword(this.form)
        .then(() => {
          this.$store.dispatch("notifications/addNotification", {
            type: "success",
            message: "Mot de passe modifié avec succès",
          })
          this.$refs.form.reset()
        })
        .catch(() =>
          this.$store.dispatch("notifications/addNotification", {
            type: "danger",
            message: "Une erreur est survenue",
          })
        )
    },
  },
}
</script>

<style scoped></style>
