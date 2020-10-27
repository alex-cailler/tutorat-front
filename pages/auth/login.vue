<template>
  <layout-radial>
    <nav-landing />
    <div>
      <h1 class="text-primary font-weight-bold text-center">Bienvenue !</h1>
      <p class="text-center text-primary mr-auto ml-auto mt-5 mb-5" style="max-width: 250px">
        Connectez vous pour accéder au panneau d'administration.
      </p>
    </div>
    <login-form />
  </layout-radial>
</template>

<script>

import LayoutRadial from "~/layouts/layout-radial";
import NavLanding from "~/components/navigation/navLanding";
import LoginForm from "~/components/forms/loginForm";

export default {
  name: "login",
  components: { LoginForm, NavLanding, LayoutRadial }
}
</script>

