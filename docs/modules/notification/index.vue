<template>
  <div>
    <c-button @click="normal">默认弹窗</c-button>
  </div>
</template>

<script>
import CButton from '../../../src/components/button/button'
export default {
  name: 'index',
  components: {CButton},
  data () {
    return {
      msg: 'index'
    }
  },
  methods: {
    normal () {
      this.$notification({
        title: '超限提醒',
        content: '视屏个数已达到 <span style="font-weight: bolder">19万 (限额20万/月)</span>，达到限额后会停止采集视屏数据。',
        icon: 'cicon-set'
      })
    }
  }
}
</script>

<style lang="less">

</style>
