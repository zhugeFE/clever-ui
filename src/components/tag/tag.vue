<template>
  <div class="zg-tag" :style="style" v-if="!closed">
    <slot></slot>
    <i v-show="closeable" class="zg-icon zgicon-delete-little1" @click="onClose"></i>
  </div>
</template>

<script>
export default {
  name: 'zgTag',
  props: {
    closeable: {
      type: Boolean,
      default: false
    },
    color: {
      type: String,
      default: ''
    }
  },
  computed: {
    style () {
      return {
        background: this.color
      }
    }
  },
  data () {
    return {
      closed: false
    }
  },
  methods: {
    onClose () {
      this.closed = true
      this.$emit('close')
    }
  }
}
</script>

<style lang="sass">
@import "styles/index"
</style>
