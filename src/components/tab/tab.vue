<template>
  <span :class="clazz" :style="style" @click="onClick">
    <i v-show="tab.icon" :class="tab.icon"></i>{{tab.title}}
  </span>
</template>

<script>
  export default {
    name: 'tab',
    props: {
      tab: {
        type: Object,
        required: true
      },
      width: null,
      index: {
        type: Number,
        required: true
      },
      activeIndex: {
        type: Number,
        required: true
      }
    },
    computed: {
      clazz () {
        return {
          'zg-tab': true,
          'zg-checked': this.activeIndex === this.index
        }
      },
      style () {
        let style = {}
        if (this.width) style.width = `${this.width}px`
        return style
      }
    },
    methods: {
      onClick () {
        if (this.activeIndex === this.index) return
        this.$emit('click', this.tab)
      }
    }
  }
</script>

<style lang="sass">

</style>
