<template>
  <div>
    <parent>
      <template slot="option" scope="scope">
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

<style lang="sass">

</style>
