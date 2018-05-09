<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="sass">
@import "../src/assets/styles/constants"
@import "./assets/styles/reset.sass"
#app
  width: 100%
  height: 100%
  overflow: hidden
  font-family: $font-family
</style>
