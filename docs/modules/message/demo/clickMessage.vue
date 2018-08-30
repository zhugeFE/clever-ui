<template>
  <div>
    <demo-panel subtitle="点击关闭" jsFiddleName="0tqzn10s">
      <c-button @click="onClick">弹出提示</c-button>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      CButton,
      DemoPanel},
    name: 'clickMessage',
    methods: {
      onClick () {
        this.$message({
          message: '出来了~',
          type: 'info',
          autoHide: false
        })
      }
    }
  }
</script>

<style lang="sass">

</style>
