<template>
  <div>
    <demo-panel title="message" subtitle="自动消失的消息提醒" jsFiddleName="2mvd4ydh">
      <c-button @click="onSuccess">成功提示</c-button>
      <c-button @click="onError">失败提示</c-button>
      <c-button @click="onCustomIcon">自定义icon</c-button>
    </demo-panel>
  </div>
</template>

<script>
  import CButton from '../../../../src/components/button/button.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CButton},
    name: 'normalMessage',
    data () {
      return {
        msg: 'normalMessage'
      }
    },
    methods: {
      onSuccess () {
        this.$message({
          message: '这是成功提示'
        })
      },
      onError () {
        this.$message({
          type: 'error',
          message: '这是失败提示'
        })
      },
      onCustomIcon () {
        this.$message({
          icon: 'cicon-message',
          message: '自定义icon的提示'
        })
      }
    },
    mounted () {
      console.log(this.$message({
        message: 'this is message',
        duration: 1000
      }))
    }
  }
</script>

<style lang="sass">

</style>
