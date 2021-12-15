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
          type="text"
          class="nav-drawer_input-search"
          placeholder="Поиск..."
        >
      </div>
      <v-btn
        block
        color="black"
        class="nav-drawer_btn-add mb-5"
        x-large
      >
        Добавить ресурс
      </v-btn>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
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
        <v-tab nuxt to="/KeyPass/HeadHunter">
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
      items: [
        {
          title: 'HeadHunter',
          to: '/KeyPass/HeadHunter'
        },
        {
          title: 'NetAngels',
          to: '/KeyPass/NetAngeles'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.app-bar {
  &_logo {
    min-width: 205px;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
  }

  &_link {
  display: flex;
  align-items: center;
  align-self: stretch;
  text-decoration: none;
  color: black;
  color: rgb(16, 16, 16)

  }
}

.main {
  background-color: #FAFAFA;
}
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
