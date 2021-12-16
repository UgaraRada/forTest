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
      <input id="newPass" type="text" class="form_fields-input">

      <label for="confirmPass" class="form_fields-label">Подтвердите пароль</label>
      <input id="confirmPass" type="text" class="form_fields-input">
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
  methods: {
    submitForm () {
      this.closeModal()
    },
    closeModal () {
      this.$emit('modalEditVisible', false)
    }
  }
}
</script>

<style scoped lang="scss">
.form {
  padding: 60px 40px;
  position: relative;

  &_btn-close {
    position: absolute;
    top: 0px;
    right: 0px;
  }
}
.form_fields {

  &-label {
    line-height: 35px;
  }

  &-input {
  display: block;
  width: 100%;
  padding: 10px 24px;
  outline: none;
  background-color: #929292;
  color: white;
  margin-bottom: 20px;
  }

  &:nth-child(2) {
    margin-bottom: 40px;
  }
}

.form_btn {
  text-transform: none;
  border-radius: 0;
  margin-right: 12px;
}
</style>
