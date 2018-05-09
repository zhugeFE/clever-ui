<template>
  <div>
    <demo-panel title="loading" jsFiddleName="8j6aaegk">
      <div class="loading-container">
        normal
        <zg-button size="small" @click="showLoading">showLoading</zg-button>
        <zg-loading v-show="show"></zg-loading>
      </div>

      <div class="loading-container">
        medium
        <zg-loading size="medium"></zg-loading>
      </div>

      <div class="loading-container">
        small
        <zg-loading size="small"></zg-loading>
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {
      DemoPanel},
    name: 'normalLoading',
    data () {
      return {
        show: true
      }
    },
    mounted () {
      setTimeout(() => {
        this.show = false
      }, 5000)
    },
    methods: {
      showLoading () {
        this.show = true
        setTimeout(() => {
          this.show = false
        }, 5000)
      }
    }
  }
</script>

<style lang="sass">

</style>
