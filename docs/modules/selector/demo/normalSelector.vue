<template>
  <div>
    <demo-panel title="普通下拉框" subtitle="单选" jsFiddleName="s5rjhjwj">

      <c-selector keyField="id"
                  :store="store"
                  placeholder="单选"
                  labelField="label"
                  :disableOptions="disableList"
                  filterOption
                  icon-field="icon"
                  :clearAble="true"
                  v-model="result">
                  <div slot="optionsHeader" style="font-size: 12px; margin-left: 5px;"> 普通下拉框的内容</div>
      </c-selector>

      <span>选中值</span>{{result}}<br>
    </demo-panel>
    <demo-panel subtitle="多选" jsFiddleName="s5rjhjwj">
      <c-selector v-model="multipleResult"
                   theme="noborder"
                   keyField="id"
                   :store="multipleStore"
                   labelField="label"
                   placeholder="多选" multiple></c-selector>
      <span>选中值</span>{{multipleResult}}<br>
    </demo-panel>
    <demo-panel subtitle="禁用">
      <c-selector keyField="id"
                  :disable="true"
                  :store="store"
                  placeholder="单选"
                  labelField="label"
                  filterOption
                  icon-field="icon"
                  v-model="result">
      </c-selector>
      <span>选中值</span>{{result}}<br>
    </demo-panel>
  </div>
</template>

<script>
  import CSelector from '../../../../src/components/selector/selector.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      CButton,
      DemoPanel,
      CSelector},
    name: 'normalSelector',
    data () {
      return {
        store: (() => {
          let store = []
          for (let i = 0; i < 3; i++) {
            store.push({
              id: i,
              label: 'option_' + i,
              icon: 'cicon-edit'
            })
          }
          return store
        })(),
        result: {id: 4},
        disableList: [3, 5, 1],
        multipleStore: (() => {
          let store = []
          for (let i = 0; i < 20; i++) {
            store.push({
              id: i,
              label: 'option_' + i
            })
          }
          return store
        })(),
        multipleResult: [{id: 1}, {id: 4}]
      }
    },
    mounted () {
      setTimeout(() => {
        this.disableList = [1, 2, 3]
        this.result = {id: 8}
        this.multipleResult = [{id: 2}, {id: 3}]
      }, 2000)
    }
  }
</script>

<style lang="sass">

</style>
