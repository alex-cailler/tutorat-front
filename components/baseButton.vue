<template>
  <component
    :is="tag"
    :type="type"
    :class="[
      { 'btn--rounded': rounded },
      { 'btn--light': light },
      { 'btn--default': !light },
      { [`btn--${size}`]: size },
      { 'btn--disabled': disabled },
    ]"
    @click="$emit('click')"
  >
    <b-spinner v-if="loading" />
    <slot />
  </component>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    tag: {
      type: String,
      default: "button",
    },
    light: Boolean,
    rounded: Boolean,
    loading: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      description: "Button size (sm|lg)",
      default: "default",
    },
  },
}
</script>

<style lang="scss" scoped>
.btn {
}
.btn--small {
  font-size: 15px;
  padding: 7px 15px;
}
.btn--large {
  padding: 15px 35px;
  font-size: 18px;
  font-weight: 600;
}
.btn--light {
  background: white;
  color: #221a77;
  border: 1px solid rgba(34, 26, 119, 0.15);
}
.btn--default {
  border: none;
  font-family: Poppins;
  font-style: normal;
  color: #ffffff;
  background: #221a77;
}
.btn--rounded {
  border-radius: 20px;
}
button:focus {
  outline: none;
}
</style>
