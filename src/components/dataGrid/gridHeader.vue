<template>
  <th :class="clazz" :style="style" :colspan="colspan" :rowspan="rowspan" @click="onClick">
    <slot :title="title">
      {{title}}
    </slot>
    <span class="c-sort-icon" v-if="sortAble && sortStatus !== 0">
      <i class="cicon-down" v-show="sortStatus === -1"></i>
      <i class="cicon-up" v-show="sortStatus === 1"></i>
    </span>
  </th>
</template>

<script>
  export default {
    name: 'cGridHeader',
    props: {
      title: {
        type: String,
        required: true
      },
      width: null,
      column: {
        type: Object,
        required: true
      },
      sortAble: {
        type: Boolean,
        default: false
      },
      colspan: {
        type: Number,
        default: 1
      },
      rowspan: {
        type: Number,
        default: 1
      },
      /**
       * @description 当前在排序的列
       */
      sortColumn: null
    },
    data () {
      return {
        /**
         * 0：未排序；1：正序；-1：倒序
         */
        sortStatus: 0
      }
    },
    computed: {
      style () {
        let style = {}
        if (this.width) {
          style.width = `${this.width}px`
          style.maxWidth = `${this.width}px`
          style.minWidth = `${this.width}px`
        }
        return style
      },
      clazz () {
        return {
          'c-grid-header-cell': true,
          'c-sort-able': this.sortAble
        }
      }
    },
    watch: {
      sortColumn (column) {
        if (column !== this.column) this.sortStatus = 0
      }
    },
    methods: {
      onClick () {
        if (!this.sortAble) return
        if (this.sortStatus === 0) {
          this.sortStatus = -1
        } else {
          this.sortStatus = this.sortStatus * -1
        }
        this.$emit('sort', this.sortStatus, this.column)
      }
    }
  }
</script>

<style lang="sass">
@import "styles/gridHeader"
</style>
