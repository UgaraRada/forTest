<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      dark
      color="#656565"
    >
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
        color="grey"
      >
        <v-tab>
          <NuxtLink class="app-bar_link" to="/">
            Keypass
          </NuxtLink>
        </v-tab>
        <v-tab>
          <NuxtLink class="app-bar_link" to="/">
            Keypass
          </NuxtLink>
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
      drawer: false,
      items: [
        {
          title: 'HeadHunter',
          to: '/'
        },
        {
          title: 'NetAngels',
          to: '/NetAngeles'
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

  }
}

.main {
  background-color: #FAFAFA;
}

</style>
