<template>
  <div>
    <demo-panel subtitle="带有校验功能">
      <c-input icon="cicon-list"
                v-if="show"
                clear-able
                :placeholder="zlocal.notEmptyNumber"
                :width="300"
                :validator="validator"
                :message="message"
                v-model="val">
      </c-input>
      <span style="margin-left: 15px">: {{val}}</span>
      <br>
      {{message}}
      <c-checkbox v-model="show">{{zlocal.show}}</c-checkbox>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
import CInput from '../../../../src/components/input/input'

export default {
  components: {CInput},
  name: 'validatorInput',
  data () {
    const {notEmptyNumber, show, defaultMessage} = zlocal
    return {
      val: '',
      message: defaultMessage,
      show: true,
      zlocal: {
        notEmptyNumber, show
      }
    }
  },
  methods: {
    validator () {
      if (!this.val) {
        this.message = zlocal.inputNotEmpty
      } else if (/\d/.test(this.val)) {
        this.message = zlocal.inputNotNumber
      }
      return this.val && !/\d/.test(this.val)
    }
  }
}
</script>

<style lang="sass">

</style>
