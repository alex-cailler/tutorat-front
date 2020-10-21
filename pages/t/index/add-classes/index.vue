<template>
  <layout-logged>
    <h1 slot="title" class="text-muted">Ajouter un cours</h1>
    <add-classes-form slot="inner"/>
  </layout-logged>
</template>

<script>
import LayoutLogged from "@/layouts/layout-logged";
import AddClassesForm from "@/components/forms/addClassesForm";

export default {
name: "index",
  components: { AddClassesForm, LayoutLogged }
}
</script>
