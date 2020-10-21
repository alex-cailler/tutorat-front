<template>
  <div class="container pb-5">
    <b-row class="justify-content-center">
      <b-col lg="5" md="7">
        <b-card class="bg-lighter border-0 mb-0">
          <b-card-header class="bg-transparent">
            <div class="text-center font-weight-bold text-primary mt-2 mb-2">Connectez vous à votre compte</div>
          </b-card-header>
          <b-card-body class="px-lg-5 py-lg-5">
            <form
              role="form"
              @submit.prevent="handleRegisterSubmit()">
              <base-input

                v-model="registerForm.last_name"
                name="name"
                class="mb-3"
                prepend-icon="user"
                type="text"
                placeholder="Nom"
                autocapitalize="none"/>
              <base-input

                v-model="registerForm.first_name"
                name="fistname"
                class="mb-3"
                prepend-icon="user"
                type="text"
                placeholder="Prénom"
                autocapitalize="none"/>
              <base-input

                v-model="registerForm.email"
                name="email"
                class="mb-3"
                prepend-icon="envelope"
                type="email"
                placeholder="Adresse mail"
                autocapitalize="none"/>

              <base-input

                v-model="registerForm.password"
                name="mot de passe"
                class="mb-3"
                prepend-icon="lock"
                type="password"
                placeholder="Mot de passe"/>

              <base-input

                v-model="registerForm.password_confirmation"
                name="mot de passe"
                class="mb-3"
                prepend-icon="lock"
                type="password"
                placeholder="Mot de passe"/>

              <div class="text-center">
                <base-button
                  :disabled="loggingIn"
                  type="submit"
                  rounded
                  tag="button"
                  size="large"
                  class="my-4">Se connecter</base-button>
              </div>
            </form>
          </b-card-body>
        </b-card>
        <b-row class="mt-3">
          <b-col sm="6"></b-col>
          <b-col sm="6" class="text-right">
            <nuxt-link
              to="/auth/login"
              class="text-gray"><small>Déja un compte ?</small></nuxt-link>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import BaseInput from "~/components/baseInputs";
import BaseButton from "~/components/baseButton";
export default {
  name: "registerForm",
  components: {BaseButton, BaseInput},
  data() {
    return {
      registerForm: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
    }
  },
  computed: {
    loggingIn() {
      return Object.keys(this.registerForm).every(i => this.registerForm[i] === '')
    }
  },
  methods: {
    handleRegisterSubmit () {
      this.$api.security.register(this.registerForm).then(r => {
        this.$store.dispatch('notifications/addNotification', { type: 'success', message: 'Votre compte à été crée avec succès'})
        this.$router.push('/auth/login')
      })
      .catch(err => this.$store.dispatch('notifications/addNotification', { type: 'danger', message: 'Un problème est survenue'}))
    },
  }
}
</script>
