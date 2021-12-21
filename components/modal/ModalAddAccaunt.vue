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
    <label for="newLogin" class="form_fields-label">Логин</label>
    <input
      id="newLogin"
      v-model="login"
      type="text"
      class="form_fields-input"
      autocomplete="off"
    >

    <label for="password" class="form_fields-label">Пароль</label>
    <input
      id="password"
      v-model="password"
      type="text"
      class="form_fields-input"
      autocomplete="off"
    >
    <label for="description" class="form_fields-label">Описание</label>
    <textarea
      id="description"
      v-model="description"
      class="form_fields-input"
      autocomplete="off"
    />
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
  props: {
    group: String
  },
  data () {
    return {
      login: '',
      password: '',
      description: ''
    }
  },
  computed: {
    router () {
      return this.$route.params.id
    }
  },

  methods: {
    submitForm () {
      const addData = {
        id: uniqid(),
        login: this.login,
        group: this.group,
        description: this.description,
        password: this.password
      }
      this.$store.commit('keyPass/addAccount', addData)
      this.closeModal()
      this.clearFields()
    },
    closeModal () {
      this.$emit('modalAddAccVisible', false)
      this.clearFields()
    },
    clearFields () {
      this.login = ''
      this.password = ''
      this.description = ''
    }
  }
}
</script>

<style scoped lang="scss">
.form_fields-input:nth-child(7) {
  margin-bottom: 40px;
}
</style>
