<template>
  <div :class="reloadClass" ref="reload">
    <div class="zg-reload-main">
      <img v-if="size === 'bigger'" src="./images/warning-big.png"/>
      <img v-if="size === 'normal'" src="./images/warning-small.png"/>
      <span class="zg-reload-msg">数据加载失败。</span>
      <zg-button theme="border" type="primary" @click="onReload" icon="zgicon-renovate">重新加载</zg-button>
    </div>
  </div>
</template>

<script>
  import ZgButton from '../button/button.vue'
  import {dom} from '../../utils/index'
  export default {
    components: {ZgButton},
    name: 'zgReload',
    props: {
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['normal', 'bigger'].includes(value)
        }
      }
    },
    mounted () {
      const container = this.$refs.reload.parentElement
      dom.setPosition(container)
    },
    computed: {
      reloadClass () {
        return {
          'zg-reload': true,
          'zg-small': this.size === 'normal',
          'zg-bigger': this.size === 'bigger'
        }
      }
    },
    methods: {
      onReload () {
        this.$emit('reload')
      }
    }
  }
</script>

<style lang="sass">
@import "styles/reload"
</style>
