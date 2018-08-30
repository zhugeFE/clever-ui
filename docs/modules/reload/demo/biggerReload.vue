<template>
  <div>
    <demo-panel title="reload" subtitle="bigger">
      <div style="height: 300px; background: lightpink">
        <c-reload size="bigger"></c-reload>
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import CReload from '../../../../src/components/reload/reload.vue'
  import DemoPanel from '../../../components/demoPanel/index.vue'
  export default {
    name: 'biggerReload',
    components: {
      DemoPanel,
      CReload},
    data () {
      return {
        msg: 'biggerReload'
      }
    }
  }
</script>

<style lang="sass">

</style>
