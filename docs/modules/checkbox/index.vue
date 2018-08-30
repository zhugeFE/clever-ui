<template>
  <div>
    <demo-panel title="checkbox" jsFiddleName="dpd0q8Ls">
      <ul class="list">
        <li>
          <c-checkbox v-model="a">默认不选中</c-checkbox><span class="result">选中结果：{{a}}</span>
        </li>
        <li>
          <c-checkbox v-model="b">默认选中</c-checkbox><span class="result">选中结果：{{b}}</span>
        </li>
        <li>
          <c-checkbox v-model="c" disable>禁用</c-checkbox><span class="result">选中结果：{{c}}</span>
        </li>
        <li>
          <c-checkbox v-model="d" disable>禁用</c-checkbox><span class="result">选中结果：{{d}}</span>
        </li>
      </ul>
    </demo-panel>
    <doc-markdown :api="api" title="checkbox"></doc-markdown>
  </div>
</template>

<script>
  import CCheckbox from '../../../src/components/checkbox/checkbox.vue'
  import DemoPanel from '../../components/demoPanel/index.vue'
  import DocMarkdown from '../../components/docMarkdown/index.vue'
  import api from './checkbox.json'
  export default {
    components: {
      DocMarkdown,
      DemoPanel,
      CCheckbox},
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
