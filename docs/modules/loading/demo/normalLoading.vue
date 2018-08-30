<template>
  <div>
    <demo-panel title="loading" jsFiddleName="8j6aaegk">
      <div class="loading-container">
        normal
        <c-button size="small" @click="showLoading">showLoading</c-button>
        <c-loading v-show="show"></c-loading>
      </div>

      <div class="loading-container">
        medium
        <c-loading size="medium"></c-loading>
      </div>

      <div class="loading-container">
        small
        <c-loading size="small"></c-loading>
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
