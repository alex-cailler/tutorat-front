<template>
  <nav class="navbar navbar-top border-bottom navbar-expand navbar-expand-lg bg- bg-primary navbar-dark">
    <div class="container-fluid d-flex justify-content-between align-items-center w-100">
      <div>
        <div class="input-group input-group-alternative bg-white px-4 py-2 d-flex align-items-center" style="border-radius: 50px">
          <font-awesome-icon class="mr-3" icon="search"/>
          <input placeholder="Rechercher" style="border: none"/>
        </div>
      </div>
      <div class="d-flex align-items-center">
        <div style="height: 50px; width: 50px" class="bg-white rounded-circle"><img class="embed-responsive h-100" src="~assets/img/wooman-think.svg" /></div>
        <b-dropdown id="dropdown-1" toggle-class="dropdown-toggle-no-caret" dropleft variant="link" text="Dropdown Button" class="m-md-2">
          <template slot="button-content">
            <div class="text-light font-weight-bold"><span class="text-lg">{{ this.$auth.user.first_name }} {{ this.$auth.user.last_name }}</span></div>
          </template>
          <b-dropdown-item href="/t/profile">Profile</b-dropdown-item>
          <b-dropdown-item href="#"><span class="text-muted">Non disponible</span></b-dropdown-item>
          <b-dropdown-item @click="handleDisconnect"><span class="text-danger">Deconnexion</span></b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navLogged",
  methods: {
    handleDisconnect() {
      this.$auth.logout().then(
        () => {
          this.$store.dispatch('notifications/addNotification',
            {type: 'success', message: 'Deconnexion avec succès'})
          window.location.href = '/';
        }
      ).catch(
        () => this.$store.dispatch('notifications/addNotification',
          {type: 'danger', message: 'Une erreur est survenue lors de la déconnexion'})
      )
    }
  }
}
</script>
