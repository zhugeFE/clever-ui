<template>
  <div>
    <parent>
      <template slot="option" slot-scope="scope">
        <<{{scope.data.label}}>>
      </template>
    </parent>
  </div>
</template>

<script>
  import Parent from './parent'

  export default {
    components: {Parent},
    name: 'demo',
    data () {
      return {
        msg: 'demo'
      }
    }
  }
</script>

<style lang="less">

</style>
