<template>
  <div>
    <demo-panel subtitle="带有校验功能">
      <zg-input icon="zgicon-list"
                v-if="show"
                clear-able
                placeholder="不能为空且不能含有数字"
                :width="250"
                :validator="validator"
                :message="message"
                v-model="val">
      </zg-input>
      <span style="margin-left: 15px">: {{val}}</span>
      <br>
      {{message}}
      <zg-checkbox v-model="show">显示</zg-checkbox>
    </demo-panel>
  </div>
</template>

<script>
  import ZgInput from '../../../../src/components/input/input'

  export default {
    components: {ZgInput},
    name: 'validatorInput',
    data () {
      return {
        val: '',
        message: '默认提示信息',
        show: true
      }
    },
    methods: {
      validator () {
        if (!this.val) {
          this.message = '输入框内容不能为空'
        } else if (/\d/.test(this.val)) {
          this.message = '输入内容不能有数字'
        }
        return this.val && !/\d/.test(this.val)
      }
    }
  }
</script>

<style lang="sass">

</style>
