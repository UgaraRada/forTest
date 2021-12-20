<template>
  <div>
    <div v-if="$route.params.id === 'search'">
      hello from search
    </div>
    <v-card class="ma-10 pa-10">
      <div class="card_header mb-10">
        <h2 class="mr-auto">
          {{ $route.params.id }}
          {{ router }}
        </h2>
        <v-btn
          :href="platformData.link"
          link
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
          v-for="(it,i) in platformData.data"
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
              @click="openEditModal(it)"
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
      <v-btn
        color="#929292"
        class="button"
        @click="modalAddAccVisible = true"
      >
        Добавить аккаунт
      </v-btn>
    </v-card>
    <v-dialog
      v-model="modalEditVisible"
      max-width="450"
    >
      <v-card>
        <ModalEditPass
          :edit-user="editUser"
          @modalEditVisible="closeEditPassModal"
        />
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="modalAddAccVisible"
      max-width="450"
    >
      <v-card>
        <ModalAddAccaunt
          @modalAddAccVisible="closeAddAccModal"
        />
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {
  layout: 'keyPass',
  data () {
    return {
      modalEditVisible: false,
      modalAddAccVisible: false,
      editUser: ''
    }
  },

  head: {
    title: 'About Page'
  },
  computed: {
    platformData () {
      return this.$store.state.keyPass.dataBase[this.router]
    },
    router () {
      return this.$route.params.id
    }
  },
  methods: {
    copyPassword (pass) {
      navigator.clipboard.writeText(pass)
    },
    closeEditPassModal (val) {
      this.modalEditVisible = val
    },
    closeAddAccModal (val) {
      this.modalAddAccVisible = val
    },
    openEditModal (it) {
      this.modalEditVisible = true
      this.editUser = JSON.parse(JSON.stringify(it))
    }
  }

}
</script>

<style scoped lang="scss">
@import './../../assets/styles/keyPassModals';

.button {
  text-transform: none;
  border-radius: 0;
}
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
