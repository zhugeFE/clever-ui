<template>
  <div>
    <count-badge></count-badge>
    <dot-badge></dot-badge>
    <shine-badge></shine-badge>

    <doc-markdown :api="api"></doc-markdown>
  </div>
</template>

<script>
  import CountBadge from './demo/countBadge.vue'
  import DotBadge from './demo/dotBadge.vue'
  import ShineBadge from './demo/shineBadge.vue'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  import api from './badge.json'

  export default {
    components: {
      DocMarkdown,
      ShineBadge,
      DotBadge,
      CountBadge},
    name: 'index',
    data () {
      return {
        api
      }
    }
  }
</script>

<style lang="sass">

</style>
