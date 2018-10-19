<template>
  <div class="c-pagination" :style="style">
    <slot name="left"></slot>
    <span class="c-pg-txt">共<span class="c-pg-num">{{total}}</span>条, <span class="c-pg-num">{{pageNumList.length}}</span>页</span>
    <c-selector :store="sizeOptions"
                v-model="pageSize"
                :width="108"
                key-field="v"
                label-field="label"></c-selector>
    <c-selector :store="pageNumList"
                v-model="pageNum"
                @change="onChange"
                :width="108"
                key-field="v"
                label-field="label"></c-selector>
    <c-button class="c-pg-pre" @click="onPre"
              :disable="pageNum.v <= 1"
              size="normal"
              icon="cicon-pagination-prev"></c-button>
    <c-button class="c-pg-next" @click="onNext"
              :disable="pageNum.v >= pageNumList.length"
              size="normal"
              icon="cicon-pagination-next"></c-button>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CSelector from '../selector/selector'
import CButton from '../button/button'
export default {
  name: 'cPagination',
  components: {CButton, CSelector},
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
      default () {
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
  data () {
    return {
      pageSize: {v: this.defaultPageSize},
      pageNum: {v: this.defaultPageNum}
    }
  },
  computed: {
    sizeOptions () {
      return this.pageSizeOptions.map(size => {
        return {
          v: size,
          label: `每页${size}条`
        }
      })
    },
    pageNumList () {
      let totalPage = Math.ceil(this.total / this.pageSize.v)
      let store = []
      for (let i = 0; i < totalPage; i++) {
        store.push({
          v: i + 1,
          label: `第${i + 1}页`
        })
      }
      return store
    },
    style () {
      return {
        'text-align': this.align
      }
    }
  },
  watch: {
    pageSize (size, preSize) {
      if (size.v === preSize.v) return
      this.pageNum = {v: 1}
      this.$nextTick(() => {
        this.onChange()
      })
    }
  },
  methods: {
    onChange () {
      this.$emit('change', {
        pageSize: this.pageSize.v,
        pageNum: this.pageNum.v
      })
    },
    onPre () {
      this.pageNum = {v: this.pageNum.v - 1}
      this.onChange()
    },
    onNext () {
      this.pageNum = {v: this.pageNum.v + 1}
      this.onChange()
    }
  }
}
</script>

<style lang="sass">
@import "styles/index"
</style>
