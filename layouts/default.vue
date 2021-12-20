<template>
  <v-app light>
    <v-app-bar
      clipped-left
      fixed
      app
      color="white"
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
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
      drawer: false
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/commonLayout.scss';

</style>
