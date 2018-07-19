<template>
  <div>
    <demo-panel title="tab" subtitle="them is normal" jsFiddleName="fnp7n0hd">
      {{chosenIndex}}
      <zg-tabs :tabWidth="150" v-model="chosenIndex" @add="onAddTab" showAdd>
        <zg-tab-panel title="center" icon="zgicon-add">
          <zg-tabs placement="center">
            <zg-tab-panel title="tab1">
              <span slot="title">
                tab1的title
              </span>
              this is tab1
            </zg-tab-panel>
            <zg-tab-panel title="tab2">
              <div style="height: 50px; background: lightpink">
                this is tab2
              </div>
            </zg-tab-panel>
            <zg-tab-panel title="tab3">
              <div style="height: 50px; background: lightcoral">
                this is tab3
              </div>
            </zg-tab-panel>
          </zg-tabs>
        </zg-tab-panel>

        <zg-tab-panel title="right">
          <zg-tabs placement="right">
            <zg-tab-panel title="tab1">
              this is tab1
            </zg-tab-panel>
            <zg-tab-panel title="tab2">
              <div style="height: 50px; background: lightpink">
                this is tab2
              </div>
            </zg-tab-panel>
            <zg-tab-panel title="tab3">
              <div style="height: 50px; background: lightcoral">
                this is tab3
              </div>
            </zg-tab-panel>
          </zg-tabs>
        </zg-tab-panel>
        <zg-tab-panel v-for="tab in tabs" :key="tab.id" :title="tab.name">
          {{tab.name}}
        </zg-tab-panel>
      </zg-tabs>
    </demo-panel>
  </div>
</template>

<script>
  import ZgTabs from '../../../../src/components/tab/tabs.vue'
  import ZgTabPanel from '../../../../src/components/tab/tabPanel.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      ZgTabPanel,
      ZgTabs},
    name: 'normalTab',
    data () {
      return {
        tabs: [],
        chosenIndex: 0
      }
    },
    mounted () {
      // setTimeout(() => {
      //   this.chosenIndex = 0
      // }, 1000)
    },
    methods: {
      onAddTab () {
        this.tabs.push({
          id: Math.random().toString().split('.')[1],
          name: 'tab' + this.tabs.length
        })
      }
    }
  }
</script>

<style lang="sass">
</style>
