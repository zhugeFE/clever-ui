<template>
  <span class="zg-input" :class="clazz" :style="style" @click="_onClick">
    <i class="zg-input-icon" :class="icon"></i>
    <zg-tooltip :placement="placement"
                :autoHide="false"
                :width="tipWidth"
                :customClass="tipClazz"
                :theme="theme" ref="tip">
      <template slot="tooltip">
        <slot name="tooltip">{{message}}</slot>
      </template>
      <input ref="input" v-if="type === 'text'"
             class="zg-input-input"
             type="text"
             :style="inputStyle"
             :placeholder="placeholder"
             v-model="inputValue"
             :readonly="readOnly"
             @focus="_onFocus"
             @blur="_onBlur"
             @input="_onInput"
             @keydown="_onKey"/>

      <input ref="input" v-if="type === 'password'"
             class="zg-input-input"
             type="password"
             :style="inputStyle"
             :placeholder="placeholder"
             v-model="inputValue"
             :readonly="readOnly"
             @focus="_onFocus"
             @blur="_onBlur"
             @input="_onInput"
             @keydown="_onKey"/>
      
      <span class="temp" ref="temp">{{inputValue}}</span>
    </zg-tooltip>
    <i v-if="clearAble && inputValue"
       class="zg-input-clear zgicon-delete-little1"
       @click="_onClear"
    ></i>
  </span>
</template>

<script>
  import {util} from '../../utils/index'
  import ZgTooltip from '../tooltip/tooltip'
  export default {
    components: {ZgTooltip},
    name: 'ZgInput',
    props: {
      /**
       * @description value
       */
      value: {
        type: String
      },
      /**
       * @description 提示文本内容
       */
      placeholder: {
        type: String
      },
      /**
       * @description icon名称
       */
      icon: {
        type: String
      },
      /**
       * @description 输入框宽度
       */
      width: {
        type: [Number, String],
        default: 150,
        validator (value) {
          if (util.isString(value)) {
            return ['auto', '100%'].indexOf(value) > -1
          }
          return value > 0
        }
      },
      /**
       * @description 输入框尺寸
       */
      size: {
        type: String,
        default: 'normal',
        validator (value) {
          return ['small', 'medium', 'big', 'normal'].includes(value)
        }
      },
      /**
       * @description 最大宽度
       * @tip 当width为auto时有效
       */
      maxWidth: {
        type: Number
      },
      /**
       * @description 最小宽度
       * @tip 当width为auto时有效
       */
      minWidth: {
        type: Number,
        default: 100
      },
      /**
       * @description 是否可清空内容
       */
      clearAble: {
        type: Boolean,
        default: false
      },
      /**
       * @description 自动获取焦点
       */
      autoFocus: {
        type: Boolean,
        default: false
      },
      /**
       * @description 作为普通文本展示
       */
      readOnly: {
        type: Boolean,
        default: false
      },
      /**
       * @description todo 输入框类型
       */
      type: {
        type: String,
        default: 'text',
        validator (value) {
          return ['text', 'password'].includes(value)
        }
      },
      /**
       * @description tooltip内容
       */
      message: {
        type: String
      },
      /**
       * @description tooltip展示位置top-left, top, top-right, left-top, right-top,left, right,left-bottom, right-bottom,bottom-left, bottom, bottom-right
       */
      placement: {
        type: String,
        default: 'bottom-left',
        validator (value) {
          let rules = [
            'top-left', 'top', 'top-right',
            'left-top', 'right-top',
            'left', 'right',
            'left-bottom', 'right-bottom',
            'bottom-left', 'bottom', 'bottom-right'
          ]
          return rules.indexOf(value) > -1
        }
      },
      /**
       * @description tooltip展示宽度，默认不限制
       */
      tipWidth: {
        type: Number
      },
      /**
       * @description tooltip自定义样式
       */
      tipClass: {
        type: String,
        default: ''
      },
      /**
       * @description tooltip主题，支持dark和light两种
       */
      theme: {
        type: String,
        default: 'dark',
        validator (value) {
          return ['dark', 'light'].includes(value)
        }
      },
      /**
       * @description 输入框校验方法，需要返回boolean值
       */
      validator: {
        type: Function,
        default: function (val) {
          return true
        }
      },
      /**
       * @description 是否自动校验，自动校验的话，失去焦点进行校验
       */
      autoValid: {
        type: Boolean,
        default: true
      },
      /**
       * @description 在输入过程中和失去焦点后进行校验
       */
      inputValid: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        inputValue: this.value,
        active: this.autoFocus,
        invalid: false,
        realWidth: this.minWidth,
        oldInput: ''
      }
    },
    mounted () {
      this.autoFocus && this.focus()
      // 初始化realWidth值
      this._computeWidth()
    },
    computed: {
      clazz () {
        let clazz = {
          'zg-active': this.active,
          'zg-error': this.invalid
        }
        clazz['zg-size-' + this.size] = true
        return clazz
      },
      style () {
        let width = util.isNumber(this.width) ? `${this.width}px` : this.width
        if (this.width === 'auto') {
          width = this.realWidth + 'px'
        }
        let style = {
          width: width
        }
        return style
      },
      inputStyle () {
        return {
          'padding-left': this.icon ? '25px' : '10px',
          'padding-right': this.clearAble ? '25px' : '10px'
        }
      },
      tipClazz () {
        let style = []
        if (this.invalid) style.push('zg-tooltip-error')
        if (this.tipClass) style.push(this.tipClass)
        return style.join(' ')
      }
    },
    watch: {
      value (value) {
        this.inputValue = value
      },
      inputValue () {
        this._computeWidth()
        this.$emit('input', this.inputValue)
      }
    },
    methods: {
      /**
       * 计算input真实宽度
       * @private
       */
      _computeWidth () {
        if (this.width !== 'auto') return
        this.$nextTick(() => {
          const temp = this.$refs.temp
          const inputStyle = window.getComputedStyle(this.$refs.input)
          let width = parseFloat(inputStyle['padding-left']) +
            parseFloat(inputStyle['padding-right']) +
            temp.offsetWidth + 3
          // 另加的3像素，是为了消除误差
          width = width < this.minWidth ? this.minWidth : width
          width = width > this.maxWidth ? this.maxWidth : width
          this.realWidth = width
        })
      },
      _onClick () {
        this.$refs.input.focus()
      },
      _onClear () {
        this.inputValue = ''
        this.$refs.tip.hide()
        this.invalid = false
      },
      _onKey (event) {
        this.$emit('key', event)
      },
      _onInput (event) {
        if (this.inputValid && this.$refs.tip && this.inputValue) {
          if (this.validator(this.inputValue)) {
            this.$refs.tip.hide()
            this.invalid = false
            this.oldInput = this.inputValue
          } else {
            let newInput = event.data || this.inputValue.replace(this.oldInput, '') || ''
            this.inputValue = this.inputValue.replace(newInput, '')
            this.$refs.tip.show()
            this.invalid = true
          }
        }
      },
      _onFocus () {
        this.active = true
        this.$emit('focus')
      },
      _onBlur () {
        if (this.inputValid && this.$refs.tip) {
          this.$refs.tip.hide()
          this.invalid = false
          this.validate()
        } else if (this.autoValid) {
          this.validate()
        }
        this.active = false
        this.$emit('blur')
      },
      focus () {
        this.$refs.input.focus()
      },
      validate () {
        if (this._isBeingDestroyed || this._isDestroyed) return false
        const flag = this.validator(this.inputValue)
        this.invalid = !flag
        this.$nextTick(() => {
          if (this._isBeingDestroyed || this._isDestroyed) return false
          if (flag) {
            this.$refs.tip.hide()
          } else {
            this.$refs.tip.show()
            // @todo待优化，此处不应该使用自动获取焦点
            if (this.autoValid) {
              this.focus()
            }
          }
        })
        return flag
      }
    }
  }
</script>

<style lang="sass">
@import "styles/input"
</style>
