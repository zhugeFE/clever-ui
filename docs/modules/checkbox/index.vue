<template>
  <div>
    <demo-panel title="checkbox" jsFiddleName="dpd0q8Ls">
      <ul class="list">
        <li>
          <zg-checkbox v-model="a">默认不选中</zg-checkbox><span class="result">选中结果：{{a}}</span>
        </li>
        <li>
          <zg-checkbox v-model="b">默认选中</zg-checkbox><span class="result">选中结果：{{b}}</span>
        </li>
        <li>
          <zg-checkbox v-model="c" disable>禁用</zg-checkbox><span class="result">选中结果：{{c}}</span>
        </li>
        <li>
          <zg-checkbox v-model="d" disable>禁用</zg-checkbox><span class="result">选中结果：{{d}}</span>
        </li>
      </ul>
    </demo-panel>
    <doc-markdown :api="api" title="checkbox"></doc-markdown>
  </div>
</template>

<script>
  import ZgCheckbox from '../../../src/components/checkbox/checkbox.vue'
  import DemoPanel from '../../components/demoPanel/index.vue'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  import api from './checkbox.json'
  export default {
    components: {
      DocMarkdown,
      DemoPanel,
      ZgCheckbox},
    name: 'index',
    data () {
      return {
        a: false,
        b: true,
        c: false,
        d: true,
        api
      }
    }
  }
</script>

<style lang="sass">
.list
  list-style: none
  & li
    list-style: none
    padding: 5px 0
  .result
    margin-left: 20px
</style>
