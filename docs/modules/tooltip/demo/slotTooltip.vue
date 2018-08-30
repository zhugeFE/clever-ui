<template>
  <div>
    <demo-panel subtitle="自定义tooltip内容, 自定义的话，autoHide为false时，需要使用者自己控制tooltip的隐藏"
                jsFiddleName="j7hkr7p2">
      <c-tooltip theme="light">
        <template slot="tooltip">
          <div>
            这是自定义tooltip内容
            <span style="color: lightskyblue">我都能高亮</span>
          </div>
        </template>
        <c-button>触发区</c-button>
      </c-tooltip>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CTooltip from '../../../../src/components/tooltip/tooltip.vue'
  import CButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      CButton,
      CTooltip,
      DemoPanel},
    name: 'slotTooltip',
    data () {
      return {
        msg: 'slotTooltip'
      }
    }
  }
</script>

<style lang="sass">
</style>
