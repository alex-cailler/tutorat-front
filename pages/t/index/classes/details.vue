<template>
  <layout-logged v-if="details !== null">
    <h1 slot="title" class="text-muted">
      Cours sur {{ details.matter.libel }}
    </h1>
    <div slot="inner" class="container-fluid">
      <div class="row">
        <div class="col-sm-6">
          <l-classes-information-card :details="details" />
        </div>
        <div class="col-sm-6">
          <b-card class="shadow">
            <b-card-header>
              <b-card-title class="text-lg">
                Liste des participants ( {{ details.participant_nbr }} /
                {{ details.place_available_nbr }} )
              </b-card-title>
            </b-card-header>
            <b-card-body>
              <div
                style="overflow-x: auto; overflow-y: auto; max-height: 450px"
              >
                <table class="table">
                  <thead class="thead-light">
                    <tr>
                      <td>Utilisateurs</td>
                      <td>Email</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(participant, key) in details.participants"
                      :key="key"
                    >
                      <td>
                        {{ participant.first_name }} {{ participant.last_name }}
                      </td>
                      <td>{{ participant.email }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </b-card-body>
          </b-card>
        </div>
      </div>
    </div>
  </layout-logged>
</template>

<script>
import LayoutLogged from "@/layouts/layout-logged"
import LClassesInformationCard from "@/components/classes/classesInformationCard"

export default {
  name: "Details",
  components: { LClassesInformationCard, LayoutLogged },
  data() {
    return {
      details: null,
    }
  },
  async mounted() {
    this.details = await this.$api.classe.get(this.$route.query.id)
  },
}
</script>
