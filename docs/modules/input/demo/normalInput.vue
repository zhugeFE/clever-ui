<template>
  <div>
    <demo-panel
      title="输入框"
      subtitle="普通输入框"
      jsFiddleName="Lqxvqar4"
    >
      <zg-input icon="zgicon-list"
                clear-able
                placeholder="有清除有icon"
                @blur="onBlur"
                @focus="onFocus"
                v-model="value">
      </zg-input>
      <zg-input type="password" clear-able></zg-input>
      <span>输入值：{{value}}</span>
    </demo-panel>
  </div>
</template>

<script>
  import ZgInput from '../../../../src/components/input/input'

  export default {
    components: {ZgInput},
    name: 'normalInput',
    data () {
      return {
        value: '默认值'
      }
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
