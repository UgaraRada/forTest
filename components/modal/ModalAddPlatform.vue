<template>
  <v-form
    class="form"
    @submit.prevent="submitForm"
  >
    <v-btn
      icon
      x-large
      color="black"
      class="form_btn-close"
      @click="closeModal"
    >
      <v-icon>mdi-close</v-icon>
    </v-btn>
    <label for="platformTitle" class="form_fields-label">Название</label>
    <input
      id="platformTitle"
      v-model="title"
      type="text"
      class="form_fields-input"
      autocomplete="off"
    >

    <label for="platformLink" class="form_fields-label">Ссылка на ресурс</label>
    <input
      id="platformLink"
      v-model="link"
      type="text"
      class="form_fields-input"
      autocomplete="off"
    >
    <v-btn
      type="submit"
      color="#929292"
      class="form_btn"
    >
      Добавить
    </v-btn>
    <v-btn
      color="#C4C4C4"
      class="form_btn"
      @click="closeModal"
    >
      Закрыть
    </v-btn>
  </v-form>
</template>

<script>
import uniqid from 'uniqid'
export default {
  data () {
    return {
      title: '',
      link: 'https://'
    }
  },
  computed: {
    // router () {
    //   return this.$route.params.id
    // }
  },

  methods: {
    submitForm () {
      const addData = {
        id: uniqid(),
        name: this.title,
        link: `${this.link}`,
        data: []
      }
      this.$store.commit('keyPass/addPlatform', addData)
      this.closeModal()
      this.clearFields()
    },
    closeModal () {
      this.$emit('modalAddPlatformVisible', false)
      this.clearFields()
    },
    clearFields () {
      this.title = ''
      this.link = 'https://'
    }
  }
}
</script>

<style scoped lang="scss">
.form_fields-input:nth-child(5) {
  margin-bottom: 40px;
}
</style>
