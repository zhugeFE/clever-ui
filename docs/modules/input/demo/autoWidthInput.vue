<template>
  <div>
    <demo-panel subtitle="宽度自适应">
      <zg-input v-model="msg" width="auto" clearAble :max-width="400" :min-width="14"></zg-input>
      <div>
        {{msg}}
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import ZgInput from '../../../../src/components/input/input'

  export default {
    components: {ZgInput},
    name: 'autoWidthInput',
    data () {
      return {
        msg: '我需要一个很长很长很长很长很长很长的文案'
      }
    }
  }
</script>

<style lang="sass">

</style>
