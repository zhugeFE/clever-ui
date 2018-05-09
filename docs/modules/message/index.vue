<template>
  <div>
    <normal-message></normal-message>
    <click-message></click-message>
  </div>
</template>

<script>
  import NormalMessage from './demo/normalMessage.vue'
  import ClickMessage from './demo/clickMessage.vue'

  export default {
    components: {
      ClickMessage,
      NormalMessage},
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
