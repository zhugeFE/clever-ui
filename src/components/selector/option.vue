<template>
  <li class="c-option" :class="className" v-show="theme !== 'tag' || !active">
    <span
      class="c-option-item"
      :class="{'c-option-line': styleType == 'line'}"
      @click="onClick"
      v-if="!multiple || theme == 'tag'"
    >
      <slot :data="data" :active="active" :disable="disable">
        <i v-if="iconField" :class="iconClass"></i
        ><span class="c-option-item-txt" :title=" data[aliasField] || data[labelField]">{{ data[aliasField] || data[labelField] }}</span>
      </slot>
    </span>
    <c-checkbox v-else @change="onClick" v-model="active" :disable="disable">
      <slot :data="data" :active="active" :disable="disable">
        <i v-if="iconField" :class="iconClass"></i
        ><span class="c-option-item-txt" :title=" data[aliasField] || data[labelField]">{{ data[aliasField] || data[labelField] }}</span>
      </slot>
    </c-checkbox>
  </li>
</template>

<script>
import CCheckbox from '../checkbox'
import emitter from '../../mixins/emitter'
export default {
  components: { CCheckbox },
  name: 'COption',
  mixins: [emitter],
  props: {
    /**
     * @description 选中状态
     */
    checked: {
      type: Boolean,
      default: false
    },
    /**
     * @description 选项值
     */
    data: {
      type: Object,
      required: true
    },
    /**
     * @description data中用于展示的字段名称
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
     * @description 图标
     */
    iconField: {
      type: String,
      default: ''
    },
    /**
     * @description 禁用选项
     */
    disable: {
      type: Boolean,
      default: false
    },
    /**
     * @description 多选模式
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * @description 主题，目前支持的主题有：normal、noborder、tag
     */
    theme: {
      type: String,
      default: 'normal',
      validator(value) {
        const themes = ['normal', 'noborder', 'tag']
        return themes.indexOf(value) > -1
      }
    },
    /**
     * 样式 类型
     */
    styleType: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      active: this.checked
    }
  },
  computed: {
    className() {
      return {
        disable: this.disable,
        active: this.active && (!this.multiple || this.theme === 'tag')
      }
    },
    iconClass() {
      let clazz = {
        'c-icon': true
      }
      clazz[this.data[this.iconField]] = true
      return clazz
    }
  },
  watch: {
    checked(checked) {
      this.active = checked
    }
  },
  methods: {
    onClick() {
      if (this.disable) return
      if (this.multiple && this.theme !== 'tag') {
        this.$emit('click', this.active, { ...this.data })
      } else if (!this.active) {
        this.active = !this.active
        this.$emit('click', this.active, { ...this.data })
      }
    }
  }
}
</script>

<style lang="sass">
@import "styles/option"
</style>
