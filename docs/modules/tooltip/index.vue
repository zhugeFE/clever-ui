<template>
  <div>
    <normal-tooltip></normal-tooltip>
    <click-tooltip></click-tooltip>
    <slot-tooltip></slot-tooltip>

    <doc-markdown :api="json"></doc-markdown>
  </div>
</template>

<script>
  import NormalTooltip from './demo/normalTooltip.vue'
  import ClickTooltip from './demo/clickTooltip.vue'
  import SlotTooltip from './demo/slotTooltip.vue'
  import DocMarkdown from '../../components/docMarkdown/index.vue'

  import json from './tooltip.json'

  export default {
    components: {
      DocMarkdown,
      SlotTooltip,
      ClickTooltip,
      NormalTooltip},
    name: 'index',
    data () {
      return {
        placement: 'bottom',
        json
      }
    }
  }
</script>

<style lang="sass">

</style>
