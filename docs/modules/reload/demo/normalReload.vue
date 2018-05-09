<template>
  <div>
    <demo-panel title="reload" subtitle="normal">
      <div style="height: 300px; background: lightpink">
        <zg-reload></zg-reload>
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import ZgReload from '../../../../src/components/reload/reload.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      ZgReload},
    name: 'normalReload',
    data () {
      return {
        msg: 'normalReload'
      }
    }
  }
</script>

<style lang="sass">

</style>
