<template>
  <div>
    <c-date-picker v-model="date"></c-date-picker>

    {{date.toLocaleDateString()}}
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<style lang="sass">

</style>
