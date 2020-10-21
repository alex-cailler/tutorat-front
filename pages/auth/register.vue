<template>
  <layout-radial>
    <nav-landing />
    <h1 class="text-primary font-weight-bold text-center">Création d'un compte</h1>
    <p class="text-center text-primary mr-auto ml-auto mt-5 mb-5" style="max-width: 350px">
      Inscrivez-vous avec l'adresse mail de votre école afin d'accéder à votre tableau de bord.
    </p>
    <register-form />
  </layout-radial>
</template>

<script>
import LayoutRadial from "~/layouts/layout-radial";
import NavLanding from "~/components/navigation/navLanding";
import RegisterForm from "~/components/forms/registerForm";
export default {
name: "register",
  components: {RegisterForm, NavLanding, LayoutRadial}
}
</script>
