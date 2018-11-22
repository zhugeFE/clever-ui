<template>
  <div>
    <demo-panel subtitle="tag模式">
      <c-selector :store="[]" labelField="label" keyField="key"></c-selector>
      <c-selector keyField="id"
                   :store="store"
                   placeholder="单选"
                   labelField="label"
                   filterOption
                   icon-field="icon"
                   theme="tag"
                   :maxWidth="450"
                   v-model="result">
      </c-selector>
    </demo-panel>
  </div>
</template>

<script>
  import {util} from '../../../../src/utils'
  import CSelector from '../../../../src/components/selector/selector.vue'
  export default {
    name: 'tagSelector',
    components: {
      CSelector
    },
    data () {
      return {
        store: (() => {
          let store = []
          for (let i = 0; i < 5; i++) {
            store.push({
              id: i,
              label: 'option_' + i,
              icon: 'cicon-edit'
            })
          }
          return store
        })(),
        result: []
      }
    },
    methods: {
      onSearch (val) {
        return new Promise((resolve) => {
          let store = []
          for (let i = 0; i < 5; i++) {
            store.push({
              id: Math.random().toString().split('.')[1],
              label: 'option_' + util.random(0, 1000),
              icon: 'cicon-edit'
            })
          }
          this.store = store
          resolve()
        })
      }
    }
  }
</script>

<style lang="sass">

</style>
