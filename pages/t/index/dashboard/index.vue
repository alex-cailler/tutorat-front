<template>
  <layout-logged>
    <h1 slot="title" class="text-muted">Dashboard</h1>
    <div slot="inner">
      <top-section />
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-8">
            <my-classes />
          </div>
          <div class="col-sm-4">
            <my-teaching-classes />
          </div>
        </div>
      </div>
    </div>
  </layout-logged>
</template>

<script>
import LayoutLogged from "@/layouts/layout-logged"
import TopSection from "@/components/dashboard/topSection"
import MyClasses from "@/components/classes/myClasses"
import MyTeachingClasses from "@/components/classes/myTeachingClasses"

export default {
  name: "Index",
  components: { MyTeachingClasses, MyClasses, TopSection, LayoutLogged },
}
</script>
