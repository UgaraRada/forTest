<template>
  <div class="pa-10">
    <h2 v-if="searchPage" class="mb-5">
      Результаты поиска:
    </h2>
    <p v-if="!showSearchData">
      Для поиска введите минимум {{ 3 - searchValue.length }} символ{{ 3 - searchValue.length === 1 ? '' : 'а' }}...
    </p>
    <p v-else-if="!Object.keys(platformsData).length">
      Ничего неть &#128532; Но ты всегда можешь попробовать еще разок...
    </p>
    <div
      v-if="showSearchData"
      class="card-wrapper"
    >
      <v-card
        v-for="(it, i) in platformsData"
        :key="i"
        class="pa-10 mb-5"
      >
        <div class="card_header mb-10">
          <h2 class="mr-auto">
            {{ it.name }}
          </h2>
          <v-btn
            :href="it.link"
            link
            icon
            color="black"
            class="card_header-link"
            tile
            target="_blank"
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
            v-for="(account,index) in it.data"
            id="card_item"
            :key="index"
            class="card_item mb-4"
          >
            <div class="card_item-header">
              <div class="mr-auto">
                {{ account.login }}
              </div>
              <v-btn
                icon
                color="black"
                tile
                @click="copyPassword(account.password)"
              >
                <v-icon>
                  mdi-content-copy
                </v-icon>
              </v-btn>
              <v-btn
                icon
                color="black"
                tile
                @click="openEditModal(account)"
              >
                <v-icon>
                  mdi-square-edit-outline
                </v-icon>
              </v-btn>
              <v-btn
                icon
                color="black"
                tile
                @click="deleteAccount(it.id, account.id)"
              >
                <v-icon>
                  mdi-trash-can-outline
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
              {{ account.description }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <v-btn
          v-if="!searchPage"
          color="#929292"
          class="button mr-10"
          @click="openAddAccModal(it.name)"
        >
          Добавить аккаунт
        </v-btn>
        <v-btn
          v-if="!searchPage && !it.data.length"
          color="#929292"
          class="button"
          @click="deleteGroup(it.id)"
        >
          Удалить платформу
        </v-btn>
      </v-card>
    </div>
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
          :group="addGroup"
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
      editUser: '',
      addGroup: ''
    }
  },

  head: {
    title: 'About Page'
  },
  computed: {
    platformsData () {
      if (!this.searchPage) {
        const getArr = Object.values(this.$store.state.keyPass.dataBase)
        return getArr.filter(it => it.id === this.$route.params.id)
      } else {
        const database = JSON.parse(JSON.stringify(this.$store.state.keyPass.dataBase))
        const accounts = Object.values(database)
          .flatMap(res => res.data)
          .filter(account => account.login.toLowerCase().includes(this.searchValue.toLowerCase()))

        for (const key in database) {
          database[key].data = []
        }
        accounts.forEach(function (it) {
          const idGroup = Object.values(database)
            .find(item => item.name === it.group).id
          database[idGroup].data.push(it)
        })
        Object.values(database).forEach((it) => {
          if (it.data.length === 0) { delete database[`${it.id}`] }
        })
        return database
      }
    },
    searchPage () {
      return this.router === 'Search'
    },
    searchValue () {
      return this.$store.state.keyPass.searchData
    },
    router () {
      return this.$route.params.id
    },
    state () {
      return this.$store.state.keyPass
    },
    showSearchData () {
      return !this.searchPage || this.searchValue.length > 2
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
    },
    openAddAccModal (it) {
      this.modalAddAccVisible = true
      this.addGroup = it
    },
    deleteAccount (itId, accId) {
      const sentData = {
        idGroup: itId,
        idAcc: accId
      }
      this.$store.commit('keyPass/deleteAccount', sentData)
    },
    deleteGroup (id) {
      this.$store.commit('keyPass/deleteGroup', id)
      const idFirstPlatform = Object.keys(this.$store.state.keyPass.dataBase)[0]
      this.$router.push(`/KeyPass/${idFirstPlatform}`)
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

  &-header button:not(:nth-child(4)) {
    margin-right: 8px;
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
