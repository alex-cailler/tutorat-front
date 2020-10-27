<template>
  <b-card>
    <b-card-header>
      <b-card-title class="text-lg"> Vos cours </b-card-title>
      <b-card-sub-title>
        Retrouvez ici les cours que vous donnez.
      </b-card-sub-title>
    </b-card-header>
    <b-list-group
      v-if="classes.length > 0"
      class="overflow-auto"
      style="max-height: 400px"
    >
      <b-list-group-item
        v-for="(classe, key) in classes"
        :key="key"
        class="d-flex justify-content-between align-items-center"
      >
        <div>
          <span class="d-block">{{ classe.libel }}</span>
          <span class="d-block text-muted text-xs">Date : {{ moment(classe.date).format("DD/MM/YYYY") }}</span>
        </div>
        <div>
          <b-button
            variant="info"
            size="sm"
            @click="$router.push(`/t/classes/details?id=${classe.id}`)"
          >
            <font-awesome-icon icon="eye" class="text-white" />
          </b-button>
          <b-button variant="danger" size="sm" @click="showModal = true">
            <font-awesome-icon icon="times" class="text-white" />
          </b-button>
        </div>
        <modal-yes-no v-model="showModal" @confirm="deleteClasses(classe.id)" />
      </b-list-group-item>
    </b-list-group>
    <div v-else class="text-center py-4">
      <div>Vous ensseigner aucun cours !</div>
      <b-button
        class="mt-3"
        pill
        variant="primary"
        size="sm"
        @click="$router.push('/t/add-classes')"
      >
        <font-awesome-icon size="sm" icon="plus" /> cours
      </b-button>
    </div>
  </b-card>
</template>

<script>
import moment from "moment"
import ModalYesNo from "@/components/modal/ModalYesNo"
import BaseButton from "@/components/baseButton"

export default {
  name: "MyTeachingClasses",
  components: { BaseButton, ModalYesNo },
  data() {
    return {
      classes: [],
      moment: moment,
      showModal: false,
    }
  },
  async mounted() {
    this.classes = await this.$api.classe.myClasses().then((r) => r)
  },
  methods: {
    deleteClasses(classe_id) {
      this.$api.classe.remove(classe_id).then((r) => {
        this.classes = this.classes.filter((classe) => classe.id !== classe_id)
      })
      this.showModal = false
    },
  },
}
</script>
