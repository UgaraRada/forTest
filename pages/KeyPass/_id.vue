<template>
  <div>
    <v-card class="ma-10 pa-10">
      <div class="card_header">
        <h2 class="mr-auto">
          {{ $route.params.id }}
        </h2>
        <v-btn
          href="#"
          icon
          color="black"
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
          v-for="(item,i) in 5"
          :key="i"
          class="card_item"
        >
          <div class="card_item-info">
            aaa@asdf.ru
          </div>
          <v-spacer />
          <v-expansion-panel-header class="card_item-btn-open" />
          <v-expansion-panel-content class="card_item-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'keyPass',
  head: {
    title: 'About Page'
  }
}
</script>

<style scoped lang="scss">
.card_header {
  display: flex;
}
.card_item {
  position: relative;
  align-items: baseline;
  padding: 20px;

  &-btn-open {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 5px;
    right: 10px;
    width: 20px;

  }
}

.card_item-description {
  width: 100%;
}
</style>
