<template>
  <div class="overview">
    <div class="line-panel">
      <span>普通文本</span>
      <c-selector :store="[]" labelField="label" keyField="id"></c-selector>
      <c-button>button</c-button>
      <c-button size="small">button</c-button>
      <c-button size="large">button</c-button>
      <c-input></c-input>
      <c-checkbox>fdfd</c-checkbox>
      <c-radio :store="radioStore" v-model="radio"></c-radio>
      <c-tag>tag</c-tag>
    </div>
  </div>
</template>

<script>
  import CSelector from '../../../src/components/selector/selector'
  import CButton from '../../../src/components/button/button'
  import CCheckbox from '../../../src/components/checkbox/checkbox'
  import CRadio from '../../../src/components/radio/radio'

  export default {
    components: {
      CRadio,
      CCheckbox,
      CButton,
      CSelector},
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

<style lang="less">
.overview {
  border: 1px solid lightseagreen;

  .line-panel {
    display: inline-block;
    border: 1px solid darkblue;
  }
}
</style>
