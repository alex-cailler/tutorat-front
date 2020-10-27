<template>
  <div class="notifications-list">
    <base-notification-message
      v-for="notification in notifications.notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
import { mapState } from "vuex"
import BaseNotificationMessage from "@/components/baseNotificationMessage"
export default {
  name: "BaseNotifications",
  components: {
    BaseNotificationMessage,
  },
  computed: mapState(["notifications"]),
}
</script>

<style>
.notifications-list {
  position: fixed;
  bottom: 0;
  right: 0;
  margin-right: 15px;
  width: 320px;
}
</style>
