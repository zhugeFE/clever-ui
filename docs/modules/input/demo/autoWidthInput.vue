<template>
  <div>
    <demo-panel subtitle="宽度自适应">
      <c-input v-model="msg" width="auto" clearAble :max-width="400" :min-width="14"></c-input>
      <div>
        {{msg}}
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import CInput from '../../../../src/components/input/input'

  export default {
    components: {CInput},
    name: 'autoWidthInput',
    data () {
      return {
        msg: '我需要一个很长很长很长很长很长很长的文案'
      }
    }
  }
</script>

<style lang="less">

</style>
