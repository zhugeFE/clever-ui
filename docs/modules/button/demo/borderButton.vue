<template>
  <div>
    <demo-panel subtitle="theme为border" jsFiddleName="yvek1jp7">
      <zg-button theme="border">normal</zg-button>
      <zg-button type="primary" theme="border">primary</zg-button>
      <zg-button type="danger" theme="border">danger</zg-button>
      <zg-button type="secondary" theme="border">secondary</zg-button>
      <zg-button type="success" theme="border">success</zg-button>
      <zg-button type="warning" theme="border">warning</zg-button>
      <zg-button type="primary" theme="border" :show-loading="showLoading" @click="onLoad">loading</zg-button>
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

<style lang="sass">

</style>
