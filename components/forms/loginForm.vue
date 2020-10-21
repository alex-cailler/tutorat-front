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
              @submit.prevent="handleLoginSubmit()">
              <base-input
                v-model="loginForm.email"
                name="email"
                class="mb-3"
                prepend-icon="envelope"
                type="email"
                placeholder="Adresse mail"
                autocapitalize="none"/>
              <base-input
                v-model="loginForm.password"
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
          <b-col sm="6">
            <nuxt-link
              to="/auth/password-reset"
              class="text-gray"><small>Mot de passe oublié ?</small></nuxt-link>
          </b-col>
          <b-col sm="6" class="text-right">
            <nuxt-link
              to="/auth/register"
              class="text-gray"><small>Créer un compte</small></nuxt-link>
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
  name: "loginForm",
  components: {BaseButton, BaseInput},
  data() {
    return {
      loginForm: {
        email: '',
        password: '',
      },
    }
  },
  computed: {
    loggingIn() {
      return Object.keys(this.loginForm).every(i => this.loginForm[i] !== '')
    }
  },
  methods: {
    handleLoginSubmit () {
     this.$auth.loginWith('local', {data: this.loginForm}).then(r =>  {
       this.$store.dispatch('notifications/addNotification', { type: 'success', message: 'Connexion réussie! :D'})
       window.location.href = '/t/dashboard'
     })
       .catch(err => this.$store.dispatch('notifications/addNotification', { type: 'danger', message: 'Un problème est survenue'}))
    }
  }
}
</script>

<style scoped>

</style>
