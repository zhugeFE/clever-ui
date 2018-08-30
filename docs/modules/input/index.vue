<template>
  <div>
    <normal-input></normal-input>
    <auto-width-input></auto-width-input>
    <validator-input></validator-input>

    <doc-markdown :api="json" title="input"></doc-markdown>
  </div>
</template>

<script>
  import DemoPanel from "../../components/demoPanel/index.vue";
  import CInput from "../../../src/components/input/input.vue";
  import json from './input.json'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  import ValidatorInput from './demo/validatorInput'
  import AutoWidthInput from './demo/autoWidthInput'
  import NormalInput from './demo/normalInput'

  export default {
    components: {
      NormalInput,
      AutoWidthInput,
      ValidatorInput,
      DocMarkdown,
      CInput,
      DemoPanel},
    data () {
      return {
        json,
        value: '默认值'
      }
    },
    methods: {
      onBlur () {
        console.log('on blur')
      },
      onFocus () {
        console.log('on focus')
      }
    }
  }
</script>

<style lang="sass">

</style>
