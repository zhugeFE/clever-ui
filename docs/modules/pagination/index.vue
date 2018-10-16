<template>
  <div>
    <c-pagination class="test-pg" :total="30" :default-page-num="2" @change="onChange"></c-pagination>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    onChange (value) {
      console.log(JSON.stringify(value))
    }
  }
}
</script>

<style lang="sass">
.test-pg
</style>
