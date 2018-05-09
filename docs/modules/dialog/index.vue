<template>
  <div>
    <normal-dialog></normal-dialog>
  </div>
</template>

<script>
  import NormalDialog from './demo/normalDialog.vue'

  export default {
    components: {NormalDialog},
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
