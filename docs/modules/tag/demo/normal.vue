<template>
  <div>
    <demo-panel title="tag" subtitle="普通tag标签">
      <zg-tag>tag</zg-tag>
      <zg-tag color="#09aef5" style="color: white">tag</zg-tag>
      <zg-tag color="#e07800" style="color: white">tag</zg-tag>
      <zg-tag color="#f55858" style="color: white">tag</zg-tag>
      <zg-tag color="#0EA1EB" style="color: white">tag</zg-tag>
      <zg-tag color="#29bd76" style="color: white">tag</zg-tag>
    </demo-panel>
  </div>
</template>

<script>
  import ZgTag from '../../../../src/components/tag/tag'

  export default {
    components: {ZgTag},
    name: 'normalTag',
    data () {
      return {
        msg: 'normal'
      }
    }
  }
</script>

<style lang="sass">

</style>
