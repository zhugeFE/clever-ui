<template>
  <div>
    <normal-loading></normal-loading>
    <doc-markdown title="loading" :api="json"></doc-markdown>
  </div>
</template>

<script>
  import NormalLoading from './demo/normalLoading.vue'
  import json from './loading.json'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  export default {
    components: {
      DocMarkdown,
      NormalLoading},
    name: 'index',
    data () {
      return {
        json
      }
    }
  }
</script>

<style lang="sass">
.loading-container
  display: inline-block
  width: 150px
  height: 150px
  border: 1px solid darkcyan
  padding: 20px
  box-sizing: border-box
</style>
