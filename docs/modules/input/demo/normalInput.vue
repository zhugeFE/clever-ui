<template>
  <div>
    <demo-panel
      title="输入框"
      subtitle="普通输入框"
      jsFiddleName="Lqxvqar4"
    >
      <c-input icon="cicon-list"
                clear-able
                :width='160'
                :placeholder="zlocal.cleared"
                @blur="onBlur"
                @focus="onFocus"
                v-model="value">
      </c-input>
      <c-input type="password" clear-able></c-input>
      <span>{{zlocal.inputValue}}：{{value}}</span>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
import CInput from '../../../../src/components/input/input'
export default {
  components: {CInput},
  name: 'normalInput',
  data () {
    const {defaultValue, cleared, inputValue} = zlocal
    return {
        // value: '默认值'
      value: defaultValue,
      zlocal: {
        cleared,
        inputValue
      }
    }
  },
  created() {
  },
  methods: {
    onBlur () {
      console.log('on blur')
    },
    onFocus () {
      console.log('on focus')
    }
  }
}
</script>

<style lang="sass">

</style>
