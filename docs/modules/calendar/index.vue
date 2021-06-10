<template>
  <div>
    <normal-calendar></normal-calendar>
  </div>
</template>

<script>
import NormalCalendar from './demo/normalCalendar'
export default {
  name: 'index',
  components: { NormalCalendar },
  data() {
    return {
      msg: 'index'
    }
  }
}
</script>

<style lang="less">

</style>
