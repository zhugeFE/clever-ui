<template>
  <div>
    <demo-panel subtitle="radioButton">
      <c-radio-button :store="store" v-model="value">
        <template slot-scope="scope">
          <c-button type="normal"
                     theme="border"
                     size="large"
                    :disable="scope.data.disable"
                     :class="scope.className"
                     :icon="scope.data.icon" @click="scope.onClick"></c-button>
        </template>
      </c-radio-button>
      <br>
      {{value}}
    </demo-panel>
  </div>
</template>

<script>
  import CRadio from '../../../../src/components/radio/radio'
  import CRadioButton from '../../../../src/components/radio-button/radioButton'

  export default {
    components: {
      CRadioButton,
      CRadio},
    name: 'radioButton',
    data () {
      return {
        value: 2,
        store: [
          {
            value: 1,
            icon: 'cicon-add'
          },
          {
            value: 2,
            disable: true,
            icon: 'cicon-fullscreen'
          },
          {
            value: 3,
            icon: 'cicon-exit'
          },
          {
            value: 4,
            icon: 'cicon-edit'
          }
        ]
      }
    },
    mounted () {
      setTimeout(() => {
        this.value = 4
        this.store[1].disable = true
      }, 2000)
    }
  }
</script>

<style lang="sass">

</style>
