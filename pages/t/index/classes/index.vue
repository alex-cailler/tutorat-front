<template>
  <layout-logged>
    <h1 slot="title" class="text-muted">Listes des cours</h1>
    <classes-array slot="inner"/>
  </layout-logged>
</template>

<script>
import LayoutLogged from "@/layouts/layout-logged";
import ClassesArray from "@/components/classes/classesArray";
export default {
name: "index",
  components: {ClassesArray, LayoutLogged}
}
</script>
