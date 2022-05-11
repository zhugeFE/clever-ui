<template>
  <div :class="reloadClass" ref="reload">
    <div class="c-reload-main">
      <img style="width:40px;height:36px" v-if="size === 'bigger'" src="./images/warning-big.png" />
      <img style="width:20px;height:18px"  v-if="size === 'normal'" src="./images/warning-small.png" />
      <span class="c-reload-msg">{{zlocal.failedLoadData}}。</span>
      <c-button
        theme="border"
        type="primary"
        @click="onReload"
        icon="cicon-renovate"
        >{{zlocal.reload}}</c-button
      >
    </div>
  </div>
</template>

<script>
import zlocal from '../../i18n'
import CButton from '../button'
import { dom } from '../../utils/index'
export default {
  components: { CButton },
  name: 'cReload',
  props: {
    /**
     * @description reload图标的大小尺寸
     * @tip 可选值为 'normal' 、'bigger'
     */
    size: {
      type: String,
      default: 'normal',
      validator(value) {
        return ['normal', 'bigger'].includes(value)
      }
    }
  },
  data() {
    const {failedLoadData, reload} = zlocal
    return {
      zlocal: {
        failedLoadData, reload
      }
    }
  },
  mounted() {
    const container = this.$refs.reload.parentElement
    dom.setPosition(container)
  },
  computed: {
    reloadClass() {
      return {
        'c-reload': true,
        'c-small': this.size === 'normal',
        'c-bigger': this.size === 'bigger'
      }
    }
  },
  methods: {
    onReload() {
      this.$emit('reload')
    }
  }
}
</script>

<style lang="sass">
@import "styles/reload"
</style>
