<template>
  <div>
    <c-date-picker v-model="date" :min="min" :max="max"></c-date-picker>
    {{date.toLocaleDateString()}}

    <div style="margin-top: 10px">
      <c-date-range-picker v-model="range" :min="min" :max="max"></c-date-range-picker>
      {{range}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      range: {
        startDate: new Date(new Date().getTime() - 3 * this.$util.dayTime),
        endDate: new Date()
      },
      date: new Date(),
      min: new Date(new Date().getTime() - 10 * this.$util.dayTime),
      max: new Date(new Date().getTime() + 10 * this.$util.dayTime)
    }
  }
}
</script>

<style lang="less">

</style>
