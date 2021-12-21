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
    <div class="form_fields">
      <label for="newPass" class="form_fields-label">Введите новый пароль</label>
      <div class="form_fields-input-wrapper">
        <input
          id="newPass"
          v-model="password"
          type="text"
          class="form_fields-input"
          autocomplete="off"
        >
        <v-btn
          tile
          icon
          color="black"
          class="field-input_btn-random"
          @click="createPassword"
        >
          <img
            src="../../static/svg/icon-random.svg"
            width="40"
          >
        </v-btn>
      </div>

      <label for="confirmPass" class="form_fields-label">Подтвердите пароль</label>
      <input
        id="confirmPass"
        v-model="confirmPass"
        type="text"
        class="form_fields-input"
        autocomplete="off"
      >
    </div>
    <div v-if="errorPass">
      Пароли должны совпадать
    </div>
    <v-btn
      type="submit"
      color="#929292"
      class="form_btn"
    >
      Сохранить
    </v-btn>
    <v-btn
      color="#C4C4C4"
      class="form_btn"
      @click="closeModal"
    >
      Отменить
    </v-btn>
  </v-form>
</template>

<script>

export default {
  props: {
    editUser: Object
  },
  data () {
    return {
      generatorPass: require('generate-password'),
      password: '',
      confirmPass: '',
      errorPass: false
    }
  },
  computed: {
    userData () {
      return this.editUser
    },
    comparePass () {
      return this.password === this.confirmPass
    }
  },

  methods: {
    submitForm () {
      if (this.comparePass) {
        this.userData.password = this.password
        this.$store.commit('keyPass/editPassword', this.userData)
        this.closeModal()
        this.errorPass = false
      } else { this.errorPass = true }
    },
    closeModal () {
      this.$emit('modalEditVisible', false)
      this.clearFields()
    },
    createPassword () {
      this.password = this.generatorPass.generate({
        length: 14,
        numbers: true
      })
      this.confirmPass = this.password
    },
    clearFields () {
      this.password = ''
      this.confirmPass = ''
    }
  }
}
</script>

<style scoped lang="scss">
.form_fields-input {

  &:last-child {
    margin-bottom: 40px;
  }

  &-wrapper {
  position: relative;
  }

}

.field-input_btn-random {
  position: absolute;
  top: 3px;
  right: 10px;
}

</style>
