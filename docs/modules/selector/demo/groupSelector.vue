<template>
  <div>
    <demo-panel title="分组下拉框" subtitle="单选" jsFiddleName="77pqa1vk">
      <c-selector key-field="id"
                   v-model="groupValue"
                   :store="store"
                   label-field="label"
                   children-field="children">
        <template slot-scope="scope">
          <span>{{zlocal.customDisplay}}{{scope.data.label}}</span>
        </template>

        <template slot="header" slot-scope="scope">
          {{zlocal.custom}}header: {{scope.data.label}}
        </template>
      </c-selector>
      <span>{{zlocal.selectedValue}}：</span>{{groupValue}}
    </demo-panel>

    <demo-panel subtitle="多选" jsFiddleName="77pqa1vk">
      <c-selector key-field="id"
                   :store="multipleStore"
                   children-field="children"
                   v-model="multipleValue"
                   multiple
                   label-field="label"></c-selector>
      <span>{{zlocal.selectedValue}}：</span>{{multipleValue.map(item => item.label)}}
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
import CSelector from '../../../../src/components/selector/selector.vue'
import DemoPanel from '../../../components/demoPanel/index.vue'

export default {
  components: {
    DemoPanel,
    CSelector},
  name: 'groupSelector',
  data () {
    const {custom, customDisplay} = zlocal
    return {
      zlocal: {
        custom, customDisplay
      },
      store: (() => {
        let result = []

        for (let i = 0; i < 50; i++) {
          let item = {
            label: 'group' + i,
            id: i,
            children: []
          }

          for (let j = 0; j < 5; j++) {
            item.children.push({
              label: `option${i}-${j}`,
              id: `${i}-${j}`
            })
          }

          result.push(item)
        }

        return result
      })(),
      groupValue: {id: '2-4'},
      multipleStore: (() => {
        let result = []

        for (let i = 0; i < 50; i++) {
          let item = {
            label: 'group' + i,
            id: i,
            children: []
          }

          for (let j = 0; j < 5; j++) {
            item.children.push({
              label: `option${i}-${j}`,
              id: `${i}-${j}`
            })
          }

          result.push(item)
        }

        return result
      })(),
      multipleValue: [{id: '2-4'}]
    }
  },
  mounted () {
    setTimeout(() => {
      this.groupValue = {id: '1-3'}
      this.multipleValue = [{id: '1-3'}]
    }, 2000)
  }
}
</script>

<style lang="sass">

</style>
