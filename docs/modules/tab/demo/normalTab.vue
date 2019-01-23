<template>
  <div>
    <demo-panel title="tab" subtitle="them is normal" jsFiddleName="fnp7n0hd">
      {{chosenIndex}}
      <zg-checkbox v-model="showRightTab">显示tab-right</zg-checkbox>
      <c-tabs v-model="chosenIndex"
               @add="onAddTab"
               @remove="onRemove"
               showAdd>
        <c-tab-panel title="center" icon="cicon-add">
          <c-tabs placement="center">
            <c-tab-panel title="tab1">
              <span slot="title">
                tab1的title
              </span>
              this is tab1
            </c-tab-panel>
            <c-tab-panel title="tab2">
              <div style="height: 50px; background: lightpink">
                this is tab2
              </div>
            </c-tab-panel>
            <c-tab-panel title="tab3">
              <div style="height: 50px; background: lightcoral">
                this is tab3
              </div>
            </c-tab-panel>
          </c-tabs>
        </c-tab-panel>

        <c-tab-panel title="right" v-if="showRightTab">
          <c-tabs placement="right">
            <c-tab-panel title="tab1">
              this is tab1
            </c-tab-panel>
            <c-tab-panel title="tab2">
              <div style="height: 50px; background: lightpink">
                this is tab2
              </div>
            </c-tab-panel>
            <c-tab-panel title="tab3">
              <div style="height: 50px; background: lightcoral">
                this is tab3
              </div>
            </c-tab-panel>
          </c-tabs>
        </c-tab-panel>
        <c-tab-panel v-for="tab in tabs" :key="tab.id" :title="tab.name" closeAble>
          <c-button>{{tab.name}}</c-button>
        </c-tab-panel>
      </c-tabs>
    </demo-panel>
  </div>
</template>

<script>
  import CTabs from '../../../../src/components/tab/tabs.vue'
  import CTabPanel from '../../../../src/components/tab/tabPanel.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CTabPanel,
      CTabs},
    name: 'normalTab',
    data () {
      return {
        tabs: [],
        chosenIndex: 0,
        showRightTab: true
      }
    },
    methods: {
      onAddTab () {
        this.tabs.push({
          id: Math.random().toString().split('.')[1],
          name: 'tab' + this.tabs.length
        })
      },
      onRemove (tab) {
        this.tabs.forEach((item, i) => {
          if (item.name === tab) {
            this.tabs.splice(i, 1)
          }
        })
      }
    }
  }
</script>

<style lang="sass">
</style>
