<template>
  <layout-logged>
    <h1 slot="title" class="text-muted">Dashboard</h1>
    <top-section slot="inner"/>
  </layout-logged>
</template>

<script>
import LayoutLogged from "@/layouts/layout-logged";
import TopSection from "@/components/dashboard/topSection";
export default {
  name: "index",
  components: { TopSection, LayoutLogged },
}
</script>
