<template>
  <div>
    <demo-panel subtitle="shine" jsFiddleName="ygLhbxkd">
      <zg-badge mode="shine" useTip tip="this is message">
        <zg-button>message</zg-button>
      </zg-badge>

      <zg-badge mode="shine" useTip tip="this is message" :disable="disable">
        <zg-button @click="onClick">{{content}}</zg-button>
        <template slot="tooltip">
          这是自定义<span style="color: lightskyblue; margin: 0 5px">tip</span>文本
        </template>
      </zg-badge>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'
  import ZgBadge from '../../../../src/components/badge/badge.vue'
  import ZgButton from '../../../../src/components/button/button.vue'

  export default {
    components: {
      ZgButton,
      ZgBadge,
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

<style lang="sass">

</style>
