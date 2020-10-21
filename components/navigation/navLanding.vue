<template>
  <div style="padding-bottom: 120px">
    <nav class="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
      <div class="container">
        <a class="navbar-brand text-primary" href="/">Tutorat</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-default">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="javascript:void(0)">
                  <h2 class="text-primary">Tutorat</h2>
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbar-default" aria-controls="navbar-default" aria-expanded="false" aria-label="Toggle navigation">
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item">
              <base-button tag="button" size="small" rounded @click="$router.push('/auth/register')">
                Inscription
              </base-button>
            </li>
            <li class="nav-item ml-3">
              <base-button tag="button" size="small" light rounded @click="$router.push('/auth/login')">
                Connexion
              </base-button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import BaseButton from "~/components/baseButton";
export default {
  name: "navLanding",
  components: {BaseButton}
}
</script>
