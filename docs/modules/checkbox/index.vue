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
    <demo-panel title="checkbox全选">
      <c-checkbox :indeterminate="indeterminate" v-model="all" @change="onAllChange">全选状态</c-checkbox>
      <span class="result">全选结果：{{all}}</span>
      <span class="result">半选结果：{{indeterminate}}</span>
      <br />
      <ul class="list">
        <li>
          <c-checkbox v-model="a">默认不选中</c-checkbox><span class="result">选中结果：{{a}}</span>
        </li>
        <li>
          <c-checkbox v-model="b">默认选中</c-checkbox><span class="result">选中结果：{{b}}</span>
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
        api,
        indeterminate: true,
        all: false
      }
    },
    computed: {
      checkForm () {
        return {
          a: this.a,
          b: this.b
        }
      }
    },
    watch: {
      checkForm () {
        if (this.a || this.b) {
          this.indeterminate = true
        } else {
          this.indeterminate = false
          this.all = false
        }
        if (this.a && this.b) {
          this.all = true
        } else {
          this.all = false
        }
      }
    },
    methods: {
      onAllChange (checked) {
        this.indeterminate = false
        if (checked) {
          this.a = true
          this.b = true
        } else {
          this.a = false
          this.b = false
        }
      }
    }
  }
</script>

<style lang="less">
.list {
  list-style: none;

  & li {
    list-style: none;
    padding: 5px 0;
  }

  .result {
    margin-left: 20px;
  }
}
</style>
