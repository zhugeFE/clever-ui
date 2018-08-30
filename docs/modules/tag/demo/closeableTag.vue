<template>
  <div>
    <demo-panel subtitle="可关闭的tag">
      <c-tag closable="">tag</c-tag>
    </demo-panel>
  </div>
</template>

<script>
  import CTag from '../../../../src/components/tag/tag'

  export default {
    components: {CTag},
    name: 'closeableTag',
    data () {
      return {
        msg: 'closeableTag'
      }
    }
  }
</script>

<style lang="sass">

</style>
