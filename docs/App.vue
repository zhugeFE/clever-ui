<template>
  <div id="app">
    <keep-alive>
      <router-view class="top_"></router-view>
    </keep-alive>
    <a href="http://www.miitbeian.gov.cn/state/outPortal/loginPortal.action" target="_blank">冀ICP备18028016号-1</a>
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
  display: flex
  flex-direction: column
  .top_
    flex: 1
  a
    flex: none
    font-size: $size-font-tip
    color: $color-brand
    text-align: center
</style>
