<template>
  <div class="sidenav navbar navbar-vertical fixed-left navbar-expand-xs navbar-light bg-white" data="vue">
    <div class="scrollbar-inner bg-white h-100 shadow p-3 px-4">
      <h1 class="text-center text-primary font-weight-bold">Tutorat</h1>
      <div class="dropdown-divider"></div>
      <h3 class="text-muted text-uppercase my-3">Menu principal</h3>
      <div>
        <ul class="m-0 p-0" style="list-style: none">
          <li class="py-2 font-weight-bold"><font-awesome-icon class="text-primary mr-3" icon="tachometer-alt"/><nuxt-link to="/t/dashboard">dashboard</nuxt-link></li>
          <li class="py-2 font-weight-bold"><font-awesome-icon class="text-primary mr-3" icon="layer-group"/><nuxt-link to="/t/classes">cours</nuxt-link></li>
          <li class="py-2 font-weight-bold"><font-awesome-icon class="text-primary mr-3" icon="plus"/><nuxt-link to="/t/add-classes">Ajouter un cours</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "navSidebar"
}
</script>

<style scoped>

</style>
