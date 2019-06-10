<template>
  <div :class="handleClass" :style="handleStyle" @click="onClickHandle">
    <slot v-if="theme !== 'tag'">
      <span v-show="!value.length" class="c-select-label c-placeholder">{{placeholder}}</span>
      <span v-show="value.length" class="c-select-label">{{resultLabel}}</span>
      <span v-if="theme === 'noborder'" class="c-count" v-show="value.length > 1">({{value.length}})</span>
      <i :class="arrowIcon"></i>
    </slot>
    <template v-else>
      <span v-show="!value.length && !focus && !active" class="c-placeholder">{{placeholder}}</span>
      <c-tag :title="item[aliasField] || item[labelField]" v-for="item in value"
              :key="item[keyField]" closeable @close="onDel(item)">
        {{getTagText(item[aliasField] || item[labelField])}}
      </c-tag>
      <input type="text"
             :style="inputStyle"
             @keyup.enter="onEnter"
             @keydown.delete="onDelete"
             @keyup.up="onPre"
             @keyup.left="onPre"
             @keyup.down="onNext"
             @keyup.right="onNext"
             @click.stop="onClickHandle"
             @focus="onFocus"
             v-model="search"
             ref="input"/>
      <span class="c-temp" ref="search">{{search}}</span>
    </template>
  </div>
</template>

<script>
  import {util} from '../../utils/index'
  import CTag from '../tag/tag'

  export default {
    components: {CTag},
    name: 'cSelectorHandle',
    props: {
      /**
       * @description 已选列表
       */
      value: {
        type: Array,
        default () {
          return []
        }
      },
      /**
       * @description 支持normal、noborder、tag
       */
      theme: {
        type: String,
        default: 'normal'
      },
      /**
       * @description placeholder
       */
      placeholder: {
        type: String,
        default: '请选择'
      },
      /**
       * @description 用于展示的字段名称
       */
      labelField: {
        type: String,
        required: true
      },
      /**
       * @description 别名字段，设置别名后，优先展示别名
       */
      aliasField: {
        type: String
      },
      /**
       * @description 选项唯一标识字段
       */
      keyField: {
        type: String,
        required: true
      },
      /**
       * @description 下拉框宽度。如果theme为noborder，则该值为最大宽度，组件宽度在范围内自适应
       */
      width: {
        type: Number,
        default: 150
      },
      /**
       * @description 最大宽度
       */
      maxWidth: {
        type: Number,
        default: 250
      },
      /**
       * @description 下拉框尺寸
       */
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['small', 'medium', 'big', 'normal'].includes(value)
        }
      },
      /**
       * @description 禁用下拉框
       */
      disable: {
        type: Boolean,
        default: false
      },
      /**
       * @description 下拉框是否处于选中状态
       */
      active: {
        type: Boolean,
        default: false
      },
      splitStr: {
        type: Boolean,
        default: true
      },
      splitStrFormat: {
        type: Object,
        default () {
          return {
            maxLength: 12,
            beginLength: 10,
            endLength: 0,
            replaceStr: '...'
          }
        }
      }
    },
    data () {
      return {
        search: '',
        inputWidth: 15,
        focus: false,
        dirtySearch: false // 脏数据，输入框失去焦点时，输入框内的文本
      }
    },
    computed: {
      handleClass () {
        let clazz = {
          'c-select-handle': true,
          active: this.active,
          disable: this.disable
        }
        clazz[`c-theme-${this.theme}`] = true
        clazz['c-size-' + this.size] = true
        return clazz
      },
      handleStyle () {
        let style = {
          'max-width': this.maxWidth + 'px'
        }
        if (this.theme === 'normal') {
          style.width = this.width + 'px'
        } else if (this.theme === 'noborder') {
          style.maxWidth = this.width + 'px'
        } else if (this.theme === 'tag') {
          style.minWidth = this.width + 'px'
        }
        return style
      },
      arrowIcon () {
        return {
          'c-select-arrow': true,
          'cicon-down': this.theme === 'normal',
          'cicon-pulldown': this.theme === 'noborder'
        }
      },
      resultLabel () {
        return this.value.map(option => {
          return option[this.aliasField] || option[this.labelField]
        }).join(',')
      },
      inputStyle () {
        return {
          width: Math.min(this.inputWidth, (this.maxWidth - 30)) + 'px'
        }
      }
    },
    watch: {
      search (val) {
        this.$nextTick(() => {
          this.inputWidth = Math.max(this.$refs.search.offsetWidth, 10) + 5
        })
        if (!this.dirtySearch) this.$emit('search', val)
        this.dirtySearch = false
      }
    },
    methods: {
      /**
       * @description handle点击处理
       */
      onClickHandle () {
        this.$emit('click')
        if (this.theme === 'tag') {
          this.focus = true
          this.$emit('search', this.search)
          this.$refs.input.focus()
        }
      },
      onFocus () {
        this.$emit('focus')
      },
      /**
       * @description 删除键处理
       * @param data
       */
      onDel (data) {
        this.$emit('delete', data)
      },
      /**
       * @description 回车处理，如果搜索内容在store中，没有完全匹配的，则
       */
      onEnter () {
        let item = {
          temp: true // 表明选项为临时选项，删除时，从store中彻底删除
        }
        item[this.keyField] = this.search.trim()
        item[this.labelField] = this.search.trim()
        this.$emit('enter', this.search ? item : null)
        this.search = ''
      },
      onDelete () {
        if (!this.search && this.value.length) {
          this.onDel(this.value[this.value.length - 1])
        }
      },
      onPre () {
        this.$emit('pre')
      },
      onNext () {
        this.$emit('next')
      },
      onBlur () {
        this.focus = false
        this.dirtySearch = true
        this.onEnter() // 失去焦点自动生效
      },
      clearSearch () {
        this.search = ''
      },
      getTagText (str) {
        return this.splitStr ? util.strMiddleSplit(str, this.splitStrFormat) : str
      }
    }
  }
</script>

<style lang="sass">
@import "styles/handle"
</style>
