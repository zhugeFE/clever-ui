<template>
  <div>
    <normal-popover ></normal-popover>
    <contextmenu-popover></contextmenu-popover>
    <hide-on-click></hide-on-click>
    <doc-markdown :api="json" title="popover"></doc-markdown>
  </div>
</template>

<script>
  import NormalPopover from './demo/normalPopover.vue'
  import ContextmenuPopover from './demo/contextmenuPopover.vue'
  import HideOnClick from './demo/hideOnClickPopover'
  import DocMarkdown from '../../components/docMarkdown/index.vue'

  import json from './popover.json'
  export default {
    components: {
      NormalPopover,
      ContextmenuPopover,
      HideOnClick,
      DocMarkdown
    },
    name: 'index',
    data () {
      return {
        json
      }
    }
  }
</script>

<style lang="sass">
h2
  margin-top: 30px
</style>
