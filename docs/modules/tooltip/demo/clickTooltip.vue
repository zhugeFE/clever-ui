<template>
  <div>
    <demo-panel subtitle="autoHide为false时，必须通过tooltip实例的show和hide方法控制显示隐藏" jsFiddleName="h1qcofxd">
      <c-button @click="onClick">{{zlocal.showTooltip}}</c-button>
      <c-tooltip
        content="出来了~，但是这段文本有点长啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
        ref="tooltip"
        :width="200"
        :autoHide="false"
        v-if="show"
        @hide="onHide"
      >
        <template slot="tooltip">
          <c-button>{{zlocal.triggerZones}}</c-button>
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

export default {
  components: {
    CTooltip,
    DemoPanel
  },
  name: 'clickTooltip',
  data () {
    const {showTooltip, triggerZones} = zlocal
    return {
      msg: 'clickTooltip',
      show: false,
      zlocal: {
        showTooltip, triggerZones
      }
    }
  },
  methods: {
    onClick () {
      this.$refs.tooltip.show()
    },
    onHide () {
      console.log('隐藏了')
    }
  },
  created () {
    setTimeout(() => {
      this.show = true
    }, 2000)
  }
}
</script>

<style lang="sass">

</style>
