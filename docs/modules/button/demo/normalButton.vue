<template>
  <div>
    <demo-panel title="button" subtitle="普通按钮，theme为normal（默认值）" jsFiddleName="fe9L2wkn">
      <c-button>normal</c-button>
      <c-button type="primary">primary</c-button>
      <c-button type="danger">danger</c-button>
      <c-button type="secondary">secondary</c-button>
      <c-button type="warning">warning</c-button>
      <c-button type="success">success</c-button>
      <c-button type="primary" :show-loading="showLoading" @click="onLoad">loading</c-button>
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
    name: 'normalButton',
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
