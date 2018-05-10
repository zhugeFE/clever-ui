<template>
  <div>
    <demo-panel subtitle="radioButton">
      <zg-radio-button :store="store" v-model="value">
        <template slot-scope="scope">
          <zg-button type="normal"
                     theme="border"
                     size="large"
                     :class="scope.className"
                     :icon="scope.data.icon" @click="scope.onClick"></zg-button>
        </template>
      </zg-radio-button>
      <br>
      {{value}}
    </demo-panel>
  </div>
</template>

<script>
  import ZgRadio from '../../../../src/components/radio/radio'
  import ZgRadioButton from '../../../../src/components/button/radioButton'

  export default {
    components: {
      ZgRadioButton,
      ZgRadio},
    name: 'radioButton',
    data () {
      return {
        value: 2,
        store: [
          {
            value: 1,
            icon: 'zgicon-add'
          },
          {
            value: 2,
            disable: false,
            icon: 'zgicon-fullscreen'
          },
          {
            value: 3,
            icon: 'zgicon-exit'
          },
          {
            value: 4,
            icon: 'zgicon-edit'
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
