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
import zlocal from '../../../../src/i18n'
import CInput from '../../../../src/components/input/input'

export default {
  components: {CInput},
  name: 'autoWidthInput',
  data () {
    const {longCopy} = zlocal
    return {
      msg: longCopy
    }
  }
}
</script>

<style lang="sass">

</style>
