<template>
  <div class="mt-5 container-fluid">
    <b-card class="shadow">
      <b-card-header class="d-flex justify-content-between">
        <div class="d-flex align-items-center">
          <b-card-title class="text-lg mr-3">
            Rechercher un cours :
          </b-card-title>
          <base-input v-model="search" placeholder="rechercher" type="text" />
        </div>
        <div>
          <b-button variant="link" @click="$router.push('/t/add-classes')">
            <font-awesome-icon icon="plus" class="mr-3" />Ajouter
          </b-button>
          <b-dropdown
            id="dropdown-1"
            toggle-class="dropdown-toggle-no-caret"
            dropleft
            variant="link"
            text="Dropdown Button"
            class="m-md-2"
          >
            <template slot="button-content">
              <font-awesome-icon icon="filter" class="mr-3" />filter
            </template>
          </b-dropdown>
        </div>
      </b-card-header>
      <div style="overflow-x: auto">
        <table class="table">
          <thead class="thead-light">
            <tr>
              <th>Cours</th>
              <th>Professeurs</th>
              <th>Lieu</th>
              <th>Dureté</th>
              <th>Participant</th>
              <th>Participer</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(classe, key) in resultSearch" :key="key">
              <td>
                <div class="text-sm font-weight-bold">
                  {{ classe.matter.libel }}
                </div>
                <div class="text-muted">
                  Ajouter le
                  {{ moment(classe.created_at).format("DD-MM-YYYY") }}
                </div>
              </td>
              <td>
                <div class="text-sm font-weight-bold">
                  {{ classe.teacher.first_name }} {{ classe.teacher.last_name }}
                </div>
              </td>
              <td>
                <div class="text-sm font-weight-bold">
                  {{ classe.room_nbr }}
                </div>
                <div class="text-muted">
                  {{ classe.address }}
                </div>
              </td>
              <td>
                <b-badge>{{ classe.level }}</b-badge>
              </td>
              <td>
                <span
                  :class="
                    nbrStatusPlaceAvailable(
                      classe.participant_nbr,
                      classe.place_available_nbr
                    )
                  "
                  >{{ classe.participant_nbr }} /
                  {{ classe.place_available_nbr }}</span
                >
              </td>
              <td class="text-center">
                <b-btn
                  @click="$router.push('/t/classes/details?id=' + classe.id)"
                >
                  Voir
                </b-btn>
                <!--b-checkbox button-variant="success" :ref="classe.id" @change="subscribe($event, classe.id, $auth.user.id)" /-->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </b-card>
  </div>
</template>

<script>
import BaseInput from "@/components/baseInputs"
import BaseButton from "@/components/baseButton"
import moment from "moment"

export default {
  name: "ClassesArray",
  components: { BaseButton, BaseInput },
  data() {
    return {
      search: "",
      moment: moment,
      classes: [],
    }
  },
  computed: {
    resultSearch() {
      return this.classes.filter((r) =>
        r.matter.libel
          .toLowerCase()
          .match(new RegExp(this.search.toLowerCase() + ".*"))
      )
    },
  },
  async mounted() {
    this.classes = await this.$api.classe.list().then((r) => r)
  },
  methods: {
    test(event) {
      console.log(event)
    },
    subscribe(event, classe_id, user_id) {
      if (event) this.$api.participant.create({ classe_id, user_id })
      else this.$api.participant.remove(user_id, classe_id)
    },
    nbrStatusPlaceAvailable(participant_nbr, available_nbr) {
      return [
        { "text-success": participant_nbr <= available_nbr / 2 },
        {
          "text-warning":
            participant_nbr > available_nbr / 2 &&
            participant_nbr < available_nbr - 2,
        },
        { "text-danger": participant_nbr >= available_nbr - 2 },
        {
          "font-weight-bolder text-underline": participant_nbr >= available_nbr,
        },
      ]
    },
  },
}
</script>
