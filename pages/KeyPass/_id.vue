<template>
  <div>
    <v-card class="ma-10 pa-10">
      <div class="card_header mb-10">
        <h2 class="mr-auto">
          {{ $route.params.id }}
        </h2>
        <v-btn
          href="#"
          icon
          color="black"
          class="card_header-link"
          tile
        >
          <v-icon>
            mdi-open-in-new
          </v-icon>
        </v-btn>
      </div>
      <v-expansion-panels
        multiple
      >
        <v-expansion-panel
          v-for="(it,i) in users"
          id="card_item"
          :key="i"
          class="card_item mb-4"
        >
          <div class="card_item-header">
            <div class="mr-auto">
              {{ it.login }}
            </div>
            <v-btn
              icon
              color="black"
              tile
              class="mr-2"
              @click="copyPassword(it.password)"
            >
              <v-icon>
                mdi-content-copy
              </v-icon>
            </v-btn>
            <v-btn
              icon
              color="black"
              tile
              @click="modalEditVisible = true"
            >
              <v-icon
                color="black"
              >
                mdi-square-edit-outline
              </v-icon>
            </v-btn>
            <div class="item-header_block-for-btn-open" />
          </div>
          <v-expansion-panel-header
            class="card_item-btn-open"
            disable-icon-rotate
            ripple
          >
            <template #actions>
              <v-icon color="black">
                mdi-unfold-more-horizontal
              </v-icon>
            </template>
          </v-expansion-panel-header>
          <v-expansion-panel-content class="card_item-description">
            <p class="mt-5">
              Описание:
            </p>
            {{ it.description }}
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
    <v-dialog
      v-model="modalEditVisible"
      max-width="450"
    >
      <v-card>
        <ModalEditPass @modalEditVisible="closeEditPassModal" />
      </v-card>
    </v-dialog>
    {{ data }}
  </div>
</template>

<script>
import ModalEditPass from '~/components/modal/ModalEditPass.vue'

export default {
  components: { ModalEditPass },
  layout: 'keyPass',
  data () {
    return {
      users: [],
      modalEditVisible: false
    }
  },

  head: {
    title: 'About Page'
  },
  computed: {
    data () {
      return this.$store.state.keyPass.dataBase
    }
  },
  created () {
    this.getUsers()
  },
  methods: {
    copyPassword (pass) {
      navigator.clipboard.writeText(pass)
    },
    closeEditPassModal (val) {
      this.modalEditVisible = val
    },
    getUsers () {
      if (this.$route.params.id === 'HeadHunter') {
        this.users = [
          {
            id: 1,
            login: 'somebody@pragmatica.design',
            password: 'adsfasdfasdf',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          {
            id: 2,
            login: 'somebody1@pragmatica.design',
            password: '123123123',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          }
        ]
      } else {
        this.users = [
          {
            id: 3,
            login: 'superMan@pragmatica.design',
            password: 'brrrrrrrr',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          {
            id: 4,
            login: 'superGirl@pragmatica.design',
            password: 'aaarrrrrr',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          {
            id: 5,
            login: 'Mr.Cowboy@pragmatica.design',
            password: 'Cowboy',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          }
        ]
      }
    }
  }

}
</script>

<style scoped lang="scss">
.card_header {
  display: flex;
  align-items: center;

  &-link {
    width: 28px;
    height: 28px;
  }
}

.card_item {
  position: relative;

  &::after {
    border-top: none;
  }

  &-header {
    display: flex;
    align-items: center;
    padding: 10px;
  }

  &-btn-open {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 3px;
    right: 10px;
    width: 20px;
  }

  &-description {
    width: 100%;
    background-color: #F9F9F9;
  }
}

#card_item {
  background-color: #F3F3F3;
}

.item-header_block-for-btn-open {
  width: 48px;
}

</style>
