<template>
  <div>
    <demo-panel subtitle="带有校验功能">
      <c-input icon="cicon-list"
                v-if="show"
                clear-able
                placeholder="不能为空且不能含有数字"
                :width="250"
                :validator="validator"
                :message="message"
                v-model="val">
      </c-input>
      <span style="margin-left: 15px">: {{val}}</span>
      <br>
      {{message}}
      <c-checkbox v-model="show">显示</c-checkbox>
    </demo-panel>
  </div>
</template>

<script>
  import CInput from '../../../../src/components/input/input'

  export default {
    components: {CInput},
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

<style lang="less">

</style>
