<template>
  <div>
    <demo-panel subtitle="autoHide为false时，必须通过tooltip实例的show和hide方法控制显示隐藏" jsFiddleName="h1qcofxd">
      <zg-button @click="onClick">显示tooltip</zg-button>
      <zg-tooltip content="出来了~，但是这段文本有点长啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊"
                  ref="tooltip"
                  :width="200"
                  :autoHide="false" @hide="onHide">
        <zg-button>触发区</zg-button>
      </zg-tooltip>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgTooltip from '../../../../src/components/tooltip/tooltip.vue'

  export default {
    components: {
      ZgTooltip,
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
