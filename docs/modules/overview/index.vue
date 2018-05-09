<template>
  <div class="overview">
    <div class="line-panel">
      <span>普通文本</span>
      <zg-selector :store="[]" labelField="label" keyField="id"></zg-selector>
      <zg-button>button</zg-button>
      <zg-button size="small">button</zg-button>
      <zg-button size="large">button</zg-button>
      <zg-input></zg-input>
      <zg-checkbox>fdfd</zg-checkbox>
      <zg-radio :store="radioStore" v-model="radio"></zg-radio>
      <zg-tag>tag</zg-tag>
    </div>
  </div>
</template>

<script>
  import ZgSelector from '../../../src/components/selector/selector'
  import ZgButton from '../../../src/components/button/button'
  import ZgCheckbox from '../../../src/components/checkbox/checkbox'
  import ZgRadio from '../../../src/components/radio/radio'

  export default {
    components: {
      ZgRadio,
      ZgCheckbox,
      ZgButton,
      ZgSelector},
    name: 'index',
    data () {
      return {
        radioStore: [
          {
            value: 1,
            label: 'radio a'
          },
          {
            value: 2,
            label: 'radio b'
          }
        ],
        radio: 1
      }
    }
  }
</script>

<style lang="sass">
.overview
  border: 1px solid lightseagreen
  .line-panel
    display: inline-block
    border: 1px solid darkblue
</style>
