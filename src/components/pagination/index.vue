<template>
  <div class="c-pagination" :style="style">
    <slot name="left"></slot>
    <span class="c-pg-txt"
      >{{zlocal.totals}}<span class="c-pg-num">{{ total }}</span
      >{{zlocal.items}}, <span class="c-pg-num">{{ pageNumList.length }}</span
      >{{zlocal.page}}</span
    >
    <c-selector
      :store="sizeOptions"
      v-model="pageSize"
      :width="140"
      expand-arrow="up"
      key-field="v"
      label-field="label"
    ></c-selector>
    <c-selector
      :store="pageNumList"
      v-model="pageNum"
      @change="onChange"
      expand-arrow="up"
      :width="140"
      key-field="v"
      label-field="label"
    ></c-selector>
    <c-button
      class="c-pg-pre"
      @click="onPre"
      :disable="pageNum.v <= 1"
      size="normal"
      icon="cicon-pagination-prev"
    ></c-button>
    <c-button
      class="c-pg-next"
      @click="onNext"
      :disable="pageNum.v >= pageNumList.length"
      size="normal"
      icon="cicon-pagination-next"
    ></c-button>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CSelector from '../selector'
import CButton from '../button'
export default {
  name: 'cPagination',
  components: { CButton, CSelector },
  props: {
    /**
     * @description 总记录数
     */
    total: {
      type: Number,
      required: true
    },
    /**
     * @description 指定每页大小
     */
    pageSizeOptions: {
      type: Array,
      default() {
        return [5, 10, 20, 50]
      }
    },
    /**
     * @description 布局方向：left/right
     */
    align: {
      type: String,
      default: 'right'
    },
    /**
     * @description 默认的页码
     */
    defaultPageNum: {
      type: Number,
      default: 1
    },
    /**
     * @description 默认的页大小
     */
    defaultPageSize: {
      type: Number,
      default: 5
    }
  },
  data() {
    const {
      totals = '共',
      items = '条',
      page = '页',
      perPage = '每页',
      theFirst = '第'
    } = window.zlocal || {}
    return {
      zlocal: {
        totals, items, page, perPage, theFirst
      },
      pageSize: { v: this.defaultPageSize },
      pageNum: { v: this.defaultPageNum }
    }
  },
  computed: {
    sizeOptions() {
      return this.pageSizeOptions.map(size => {
        return {
          v: size,
          label: this.zlocal.perPage + ' ' + `${size}` + ' ' + this.zlocal.items
        }
      })
    },
    pageNumList() {
      let totalPage = Math.ceil(this.total / this.pageSize.v) || 1
      let store = []
      for (let i = 0; i < totalPage; i++) {
        store.push({
          v: i + 1,
          label: this.zlocal.theFirst + ' ' + `${i + 1}` + ' ' + this.zlocal.page
        })
      }
      return store
    },
    style() {
      return {
        'text-align': this.align
      }
    }
  },
  watch: {
    pageSize(size, preSize) {
      if (size.v === preSize.v) return
      this.pageNum = { v: 1 }
      this.$nextTick(() => {
        this.onChange()
      })
    },
    pageNumList() {
      if (this.defaultPageNum <= this.pageNumList) {
        this.pageNum = { v: this.defaultPageNum }
      } else {
        this.pageNum = this.pageNumList[0]
      }
    }
  },
  methods: {
    onChange() {
      this.$emit('change', {
        pageSize: this.pageSize.v,
        pageNum: this.pageNum.v
      })
    },
    onPre() {
      this.pageNum = { v: this.pageNum.v - 1 }
      this.onChange()
    },
    onNext() {
      this.pageNum = { v: this.pageNum.v + 1 }
      this.onChange()
    }
  }
}
</script>

<style lang="sass">
@import "styles/index"
</style>
