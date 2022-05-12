<template>
  <div>
    <demo-panel subtitle="自定义tooltip内容, 自定义的话，autoHide为false时，需要使用者自己控制tooltip的隐藏"
                jsFiddleName="j7hkr7p2">
      <c-tooltip theme="light">
        <template slot="tooltip">
          <div>
            {{zlocal.customTooltipContent}}
            <span style="color: lightskyblue">{{zlocal.canHighlight}}</span>
          </div>
        </template>
        <c-button>{{zlocal.triggerZones}}</c-button>
      </c-tooltip>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
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
    const {canHighlight, triggerZones, customTooltipContent} = zlocal
    return {
      msg: 'slotTooltip',
      zlocal: {
        canHighlight, triggerZones, customTooltipContent
      }
    }
  }
}
</script>

<style lang="sass">
</style>
