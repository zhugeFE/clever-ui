<template>
  <div>
    <demo-panel subtitle="shine" jsFiddleName="ygLhbxkd">
      <c-badge mode="shine" useTip tip="this is message">
        <c-button>message</c-button>
      </c-badge>

      <c-badge mode="shine" useTip tip="this is message" :disable="disable">
        <c-button @click="onClick">{{content}}</c-button>
        <template slot="tooltip">
          这是自定义<span style="color: lightskyblue; margin: 0 5px">tip</span>文本
        </template>
      </c-badge>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import CBadge from '../../../../src/components/badge/badge.vue'
  import CButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      CButton,
      CBadge,
      DemoPanel},
    name: 'shineBadge',
    data () {
      return {
        content: '点击关闭tooltip',
        disable: false
      }
    },
    methods: {
      onClick () {
        this.disable = !this.disable
        this.content = `点击${this.disable ? '启用' : '关闭'}tooltip`
      }
    }
  }
</script>

<style lang="less">

</style>
