<template>
  <div class="main-content">
    <base-notifications />
    <div class="bg-primary" style="height: 25em">
      <nav-logged />
      <div class="container-fluid mt-3 mb-3">
        <slot name="title" />
      </div>
      <slot name="inner" />
    </div>
    <div>
      <slot name="outer" />
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/baseInputs"
import NavLogged from "@/components/navigation/navLogged"
import BaseNotifications from "@/components/baseNotifications"
export default {
  name: "LayoutLogged",
  components: { BaseNotifications, NavLogged, BaseInput },
}
</script>
