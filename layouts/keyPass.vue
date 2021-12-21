<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      dark
      color="#656565"
      class="pa-5"
    >
      <div class="input-search-wrapper mb-5">
        <input
          v-model="search"
          type="text"
          class="nav-drawer_input-search"
          placeholder="Поиск..."
          @click="goToSearch"
        >
      </div>
      <v-btn
        block
        color="black"
        class="nav-drawer_btn-add mb-5"
        x-large
        @click="modalAddPlatformVisible = true"
      >
        Добавить ресурс
      </v-btn>
      <v-list>
        <v-list-item
          v-for="(item, i) in platforms"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-dialog
        v-model="modalAddPlatformVisible"
        max-width="450"
      >
        <v-card>
          <ModalAddPlatform
            @modalAddPlatformVisible="closeAddPlatformModal"
          />
        </v-card>
      </v-dialog>
    </v-navigation-drawer>
    <v-app-bar
      clipped-left
      fixed
      app
      color="white"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <div class="app-bar_logo">
        pragmatica
      </div>
      <v-tabs
        color="black"
      >
        <v-tab nuxt to="/KeyPass/">
          Keypass
        </v-tab>
        <v-tab nuxt to="/">
          Something else
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main class="main">
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: true,
      modalAddPlatformVisible: false,
      search: ''
    }
  },
  computed: {
    platforms () {
      return this.$store.getters['keyPass/platforms']
    },
    keyPassLink () {
      return this.$store.getters['keyPass/platforms'][0].to
    }
  },
  watch: {
    search () {
      this.$store.commit('keyPass/serchData', this.search)
    }
  },
  methods: {
    closeAddPlatformModal () {
      this.modalAddPlatformVisible = false
    },
    goToSearch () {
      this.$router.push('/KeyPass/Search')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/commonLayout.scss';

.input-search-wrapper {
  position: relative;
  &::after {
    content: url("../static/svg/icon-search.svg");
    position: absolute;
    top: 4px;
    left: 10px;
    display: block;
    width: 31px;
    height: 31px;
  }
}
.nav-drawer_input-search {
  position: relative;
  display: block;
  outline: none;
  height: 38px;
  width: 100%;
  padding-left: 45px;
  background-color: #929292;
  color: white;

  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
}

.nav-drawer_btn-add {
  text-transform: none;
  border-radius: 0;
}

</style>
