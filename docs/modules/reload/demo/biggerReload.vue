<template>
  <div>
    <demo-panel title="reload" subtitle="bigger">
      <div style="height: 300px; background: lightpink">
        <zg-reload size="bigger"></zg-reload>
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import ZgReload from '../../../../src/components/reload/reload.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  export default {
    name: 'biggerReload',
    components: {
      DemoPanel,
      ZgReload},
    data () {
      return {
        msg: 'biggerReload'
      }
    }
  }
</script>

<style lang="sass">

</style>
