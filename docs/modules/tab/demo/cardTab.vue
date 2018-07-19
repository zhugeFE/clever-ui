<template>
  <div>
    <demo-panel title="tab" subtitle="them is card" jsFiddleName="zj6dsfq2">
      <zg-tabs theme="card" showAdd>
        <zg-tab-panel title="center">
          <zg-tabs placement="center" theme="card" :tabWidth="100">
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
      </zg-tabs>
    </demo-panel>
  </div>
</template>

<script>
  import ZgTabs from '../../../../src/components/tab/tabs.vue'
  import ZgTabPanel from '../../../../src/components/tab/tabPanel.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    name: 'cardTab',
    components: {
      DemoPanel,
      ZgTabPanel,
      ZgTabs},
    data () {
      return {
        msg: 'cardTab'
      }
    }
  }
</script>

<style lang="sass">

</style>
