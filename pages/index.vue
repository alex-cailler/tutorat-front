<template>
  <layout-radial>
    <nav-landing />
    <top-section />
    <feature-section />
  </layout-radial>
</template>

<script>
import BaseButton from "~/components/baseButton"
import NavLanding from "~/components/navigation/navLanding"
import TopSection from "~/components/landing/topSection"
import FeatureSection from "~/components/landing/featureSection"
import LayoutRadial from "~/layouts/layout-radial"
export default {
  components: {
    LayoutRadial,
    FeatureSection,
    TopSection,
    NavLanding,
    BaseButton,
  },
}
</script>
