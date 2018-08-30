<template>
  <div>
    <demo-panel title="tag" subtitle="普通tag标签">
      <c-tag>tag</c-tag>
      <c-tag color="#09aef5" style="color: white">tag</c-tag>
      <c-tag color="#e07800" style="color: white">tag</c-tag>
      <c-tag color="#f55858" style="color: white">tag</c-tag>
      <c-tag color="#0EA1EB" style="color: white">tag</c-tag>
      <c-tag color="#29bd76" style="color: white">tag</c-tag>
    </demo-panel>
  </div>
</template>

<script>
  import CTag from '../../../../src/components/tag/tag'

  export default {
    components: {CTag},
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
