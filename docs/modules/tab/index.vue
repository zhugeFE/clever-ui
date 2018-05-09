<template>
  <div>
    <normal-tab></normal-tab>
    <card-tab></card-tab>
    <doc-markdown title="tabs" :api="json.tabs"></doc-markdown>
    <doc-markdown title="tabPanel" :api="json.tabPanel"></doc-markdown>
  </div>
</template>

<script>
  import NormalTab from './demo/normalTab.vue'
  import CardTab from './demo/cardTab.vue'

  import tabsJson from './tabs.json'
  import tabPanelJson from './tabPanel.json'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  export default {
    components: {
      DocMarkdown,
      CardTab,
      NormalTab},
    name: 'index',
    data () {
      return {
        json: {
          tabs: tabsJson,
          tabPanel: tabPanelJson
        }
      }
    }
  }
</script>

<style lang="sass">

</style>
