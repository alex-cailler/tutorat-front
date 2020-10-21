<template>
  <div>
    <b-alert :show="show" dismissible fade :variant="notification.type">
      {{ notification.message }}
    </b-alert>
  </div>
</template>

<script>
export default {
  name: 'base-notification-message',
  props: ["notification"],
  data() {
    return {
      timeout: null,
      show: false
    };
  },
  computed: {
    typeClass() {
      return `alert-${this.notification.type}`;
    }
  },
  created() {
    const self = this
    setTimeout(() => {
      self.show = true
    },100)
    this.timeout = setTimeout(() => {
      self.$store.dispatch('notifications/removeNotification', self.notification)
    }, 10000);
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },
};
</script>
