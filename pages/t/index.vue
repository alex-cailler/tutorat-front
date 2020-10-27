<template>
  <div>
    <nav-sidebar />
    <nuxt-child />
  </div>
</template>

<script>
import NavSidebar from "@/components/navigation/navSidebar"
import BaseInput from "@/components/baseInputs"
export default {
  name: "Index",
  components: { BaseInput, NavSidebar },
  middleware: ["auth"],
}
</script>
