<template>
  <div>
    <demo-panel title="Radio" subtitle="normal radio">
      <c-radio :store="store" v-model="value">
        <template slot-scope="scope">->>>  {{scope.data.label}}</template>
      </c-radio>
      <div>
        {{value}}
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import CRadio from '../../../../src/components/radio/radio'

  export default {
    components: {CRadio},
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
