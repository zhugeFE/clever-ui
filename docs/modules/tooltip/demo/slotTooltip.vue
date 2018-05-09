<template>
  <div>
    <demo-panel subtitle="自定义tooltip内容, 自定义的话，autoHide为false时，需要使用者自己控制tooltip的隐藏"
                jsFiddleName="j7hkr7p2">
      <zg-tooltip theme="light">
        <template slot="tooltip">
          <div>
            这是自定义tooltip内容
            <span style="color: lightskyblue">我都能高亮</span>
          </div>
        </template>
        <zg-button>触发区</zg-button>
      </zg-tooltip>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgTooltip from '../../../../src/components/tooltip/tooltip.vue'
  import ZgButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      ZgButton,
      ZgTooltip,
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
