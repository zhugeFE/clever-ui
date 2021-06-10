<template>
  <div>
    <normal-tag></normal-tag>
    <closeable-tag></closeable-tag>
  </div>
</template>

<script>
  import CTag from '../../../src/components/tag/tag'
  import NormalTag from './demo/normal'
  import CloseableTag from './demo/closeableTag'

  export default {
    components: {
      CloseableTag,
      NormalTag,
      CTag},
    name: 'index',
    data () {
      return {
        msg: 'index'
      }
    }
  }
</script>

<style lang="less">

</style>
