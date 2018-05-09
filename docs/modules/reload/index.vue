<template>
  <div>
    <normal-reload></normal-reload>
    <bigger-reload></bigger-reload>
  </div>
</template>

<script>
  import NormalReload from './demo/normalReload.vue'
  import BiggerReload from './demo/biggerReload.vue'

  export default {
    components: {
      BiggerReload,
      NormalReload},
    name: 'index',
    data () {
      return {
        msg: 'index'
      }
    }
  }
</script>

<style lang="sass">

</style>
