<template>
  <div>
    <demo-panel subtitle="theme为border" jsFiddleName="yvek1jp7">
      <c-button theme="border">normal</c-button>
      <c-button type="primary" theme="border">primary</c-button>
      <c-button type="danger" theme="border">danger</c-button>
      <c-button type="secondary" theme="border">secondary</c-button>
      <c-button type="success" theme="border">success</c-button>
      <c-button type="warning" theme="border">warning</c-button>
      <c-button type="primary" theme="border" :show-loading="showLoading" @click="onLoad">loading</c-button>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {DemoPanel},
    name: 'borderButton',
    data () {
      return {
        showLoading: false
      }
    },
    methods: {
      onLoad () {
        this.showLoading = true
        setTimeout(() => {
          this.showLoading = false
        }, 2000)
      }
    }
  }
</script>

<style lang="less">

</style>
