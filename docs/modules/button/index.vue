<template>
  <div>
    <normal-button></normal-button>
    <border-button></border-button>
    <size-button></size-button>
    <icon-button></icon-button>
    <radio-button></radio-button>

    <doc-markdown :api="json.button" title="button"></doc-markdown>
  </div>
</template>
<script>
import buttonJson from './button.json'

import NormalButton from './demo/normalButton.vue'
import BorderButton from './demo/borderButton.vue'
import SizeButton from './demo/sizeButton.vue'
import IconButton from './demo/iconButton.vue'
import RadioButton from '../radio/demo/radioButton'
export default {
  components: {
    RadioButton,
    NormalButton,
    IconButton,
    SizeButton,
    BorderButton},
  name: 'buttonDemo',
  data () {
    return {
      json: {
        button: buttonJson
      }
    }
  },
  methods: {
    onClick (e) {
      console.log(e.target)
    }
  }
}
</script>
