<template>
  <div>
    <demo-panel title="标题分组-可切换数据" jsFiddleName="77pqa1vk">
      <c-selector key-field="id"
                   v-model="groupValue"
                   :store="store"
                   label-field="label"
                   :width="220"
                   children-field="children"
                   styleType="line"
                   :showGroupShortcut="true">
        <template slot-scope="scope">
          <span>{{zlocal.customDisplay}}{{scope.data.label}}</span>
        </template>
        <template slot="header" slot-scope="scope">
          {{zlocal.custom}}header: {{scope.data.label}}
        </template>
      </c-selector>
      <span>{{zlocal.selectedValue}}</span>{{groupValue}}
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
    const {selectedValue, customDisplay, custom} = zlocal
    return {
      zlocal: {
        selectedValue, customDisplay, custom
      },
      store: (() => {
        let result = []

        for (let i = 0; i < 4; i++) {
          let item = {
            label: 'group' + i,
            id: i,
            children: []
          }

          for (let j = 0; j < 10; j++) {
            item.children.push({
              label: `option${i}-${j}`,
              id: `${i}-${j}`
            })
          }

          result.push(item)
        }

        return result
      })(),
      groupValue: {id: '2-4'}
    }
  }
}
</script>

<style lang="sass">

</style>
