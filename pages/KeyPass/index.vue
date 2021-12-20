<template>
  <div>
    <a href="#" @click.prevent="testRouter">testRouter</a>
  </div>
</template>

<script>

export default {
  methods: {
    testRouter () {
      this.$router.push('/KeyPass/ad')
    }
  }
}
</script>
