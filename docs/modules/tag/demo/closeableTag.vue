<template>
  <div>
    <demo-panel subtitle="可关闭的tag">
      <zg-tag closable="">tag</zg-tag>
    </demo-panel>
  </div>
</template>

<script>
  import ZgTag from '../../../../src/components/tag/tag'

  export default {
    components: {ZgTag},
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
