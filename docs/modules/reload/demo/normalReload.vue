<template>
  <div>
    <demo-panel title="reload" subtitle="normal">
      <div style="height: 300px; background: lightpink">
        <c-reload></c-reload>
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import CReload from '../../../../src/components/reload/reload.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel,
      CReload},
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
