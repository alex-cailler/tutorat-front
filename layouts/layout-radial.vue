<template>
  <div>
    <base-notifications />
    <div class="position-absolute vh-100 vw-100">
      <div class="h-75 w-100">
        <img
          class="embed-responsive cover cover-bottom h-100"
          src="~assets/img/bg.svg"
        >
      </div>
    </div>
    <div class="position-relative" style="z-index: 3">
      <slot />
    </div>
  </div>
</template>

<script>
import BaseNotifications from "@/components/baseNotifications"
export default {
  name: "LayoutRadial",
  components: { BaseNotifications },
}
</script>
