<template>
  <div>
    <demo-panel title="tab" subtitle="them is card" jsFiddleName="zj6dsfq2">
      <c-tabs theme="card" showAdd>
        <c-tab-panel title="center">
          <c-tabs placement="center" theme="card" :tabWidth="100">
            <c-tab-panel title="tab1">
              this is tab1
            </c-tab-panel>
            <c-tab-panel title="tab2">
              <div style="height: 50px; background: lightpink">
                <c-button>this is tab2</c-button>
              </div>
            </c-tab-panel>
            <c-tab-panel title="tab3">
              <div style="height: 50px; background: lightcoral">
                this is tab3
              </div>
            </c-tab-panel>
          </c-tabs>
        </c-tab-panel>

        <c-tab-panel title="right">
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
      </c-tabs>
    </demo-panel>
  </div>
</template>

<script>
  import CTabs from '../../../../src/components/tabs/tabs.vue'
  import CTabPanel from '../../../../src/components/tab-panel/tabPanel.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    name: 'cardTab',
    components: {
      DemoPanel,
      CTabPanel,
      CTabs},
    data () {
      return {
        msg: 'cardTab'
      }
    }
  }
</script>

<style lang="sass">

</style>
