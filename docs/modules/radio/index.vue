<template>
  <div>
    <normal-radio></normal-radio>
    <radio-button></radio-button>
    <doc-markdown :api="api"></doc-markdown>
  </div>
</template>

<script>
  import NormalRadio from './demo/normalRadio'
  import api from './radio'
  import DocMarkdown from '../../components/docMarkdown/index'
  import RadioButton from './demo/radioButton'
  export default {
    components: {
      RadioButton,
      DocMarkdown,
      NormalRadio},
    name: 'index',
    data () {
      return {
        api
      }
    }
  }
</script>

<style lang="less">

</style>
