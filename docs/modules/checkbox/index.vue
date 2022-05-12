<template>
  <div>
    <demo-panel title="checkbox" jsFiddleName="dpd0q8Ls">
      <ul class="list">
        <li>
          <c-checkbox v-model="a">{{zlocal.defaultNotSelected}}</c-checkbox><span class="result">{{zlocal.selectedResult}}：{{a}}</span>
        </li>
        <li>
          <c-checkbox v-model="b">{{zlocal.defaultSelected}}</c-checkbox><span class="result">{{zlocal.selectedResult}}：{{b}}</span>
        </li>
        <li>
          <c-checkbox v-model="c" disable>{{zlocal.disable}}</c-checkbox><span class="result">{{zlocal.selectedResult}}：{{c}}</span>
        </li>
        <li>
          <c-checkbox v-model="d" disable>{{zlocal.disable}}</c-checkbox><span class="result">{{zlocal.selectedResult}}：{{d}}</span>
        </li>
      </ul>
    </demo-panel>
    <demo-panel :title="'checkbox '+zlocal.selectAll">
      <c-checkbox :indeterminate="indeterminate" v-model="all" @change="onAllChange">{{zlocal.allState}}</c-checkbox>
      <span class="result">{{zlocal.allResult}}：{{all}}</span>
      <span class="result">{{zlocal.halfSelectResult}}：{{indeterminate}}</span>
      <br />
      <ul class="list">
        <li>
          <c-checkbox v-model="a">{{zlocal.defaultNotSelected}}</c-checkbox><span class="result">{{zlocal.selectedResult}}：{{a}}</span>
        </li>
        <li>
          <c-checkbox v-model="b">{{zlocal.defaultSelected}}</c-checkbox><span class="result">{{zlocal.selectedResult}}：{{b}}</span>
        </li>
      </ul>
    </demo-panel>
    <doc-markdown :api="api" title="checkbox"></doc-markdown>
  </div>
</template>

<script>
import zlocal from '../../../src/i18n'
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
    const {defaultNotSelected, selectAll, allState, defaultSelected, selectedResult, disable, allResult, halfSelectResult} = zlocal
    return {
      a: false,
      b: true,
      c: false,
      d: true,
      api,
      indeterminate: true,
      all: false,
      zlocal: {
        defaultNotSelected,
        allResult,
        halfSelectResult,
        defaultSelected,
        disable,
        selectedResult,
        selectAll,
        allState
      }
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

<style lang="sass">
.list
  list-style: none
  & li
    list-style: none
    padding: 5px 0
  .result
    margin-left: 20px
</style>
