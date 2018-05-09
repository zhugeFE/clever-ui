<template>
  <div>
    <demo-panel title="Radio" subtitle="normal radio">
      <zg-radio :store="store" v-model="value">
        <template scope="scope">->>>  {{scope.data.label}}</template>
      </zg-radio>
      <div>
        {{value}}
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import ZgRadio from '../../../../src/components/radio/radio'

  export default {
    components: {ZgRadio},
    name: 'normalRadio',
    data () {
      return {
        store: [
          {
            value: 1,
            label: 'radio a',
            disable: true
          },
          {
            value: 2,
            label: 'radio b'
          }
        ],
        value: 1
      }
    }
  }
</script>

<style lang="sass">

</style>
