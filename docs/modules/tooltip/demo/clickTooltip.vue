<template>
  <div>
    <demo-panel subtitle="autoHide为false时，必须通过tooltip实例的show和hide方法控制显示隐藏" jsFiddleName="h1qcofxd">
      <c-button @click="onClick">显示tooltip</c-button>
      <c-tooltip content="出来了~，但是这段文本有点长啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
                  ref="tooltip"
                  :width="200"
                  :autoHide="false" @hide="onHide">
        <c-button>触发区</c-button>
      </c-tooltip>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CTooltip from '../../../../src/components/tooltip/tooltip.vue'

  export default {
    components: {
      CTooltip,
      DemoPanel},
    name: 'clickTooltip',
    data () {
      return {
        msg: 'clickTooltip'
      }
    },
    methods: {
      onClick () {
        this.$refs.tooltip.show()
      },
      onHide () {
        console.log('隐藏了')
      }
    }
  }
</script>

<style lang="sass">

</style>
