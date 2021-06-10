<script type="text/jsx">
import CTooltip from '../tooltip'

export default {
  components: {CTooltip},
  name: 'cBadge',
  props: {
    /**
     * @description 徽标类型：count、dot、shine（闪烁状态，没有数字标识）
     */
    mode: {
      type: String,
      default: 'dot',
      validator (value) {
        return ['count', 'dot', 'shine'].indexOf(value) > -1
      }
    },
    /**
     * @description mode为count时有效
     */
    count: {
      type: Number,
      default: 0
    },
    /**
     * @description 最大显示数目，超过后显示max+
     */
    max: {
      type: Number,
      default: 100
    },
    /**
     * @description 是否禁用徽标
     */
    disable: {
      type: Boolean,
      default: false
    },
    /**
     * @description 启用tooltip，mode为shine时有效
     */
    useTip: {
      type: Boolean,
      default: false
    },
    /**
     * @description tooltip内容，有slot为tooltip时，以slot内容为准
     */
    tip: {
      type: String
    },
    /**
     * @description tooltip自动显示隐藏，同tooltip的autoHide
     */
    autoHideTip: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    dotClass () {
      return {
        'c-badge-dot': this.mode === 'dot',
        'c-badge-count': this.mode === 'count',
        'c-badge-shine': this.mode === 'shine'
      }
    }
  },
  render (h) {
    return (
      <span class="c-badge">
        {(() => {
          if (this.disable || this.mode !== 'shine' || !this.useTip) {
            return this.$slots.default
          } else {
            return (
              <c-tooltip ref="tooltip" content={this.tip} placement="top-right" autoHide={this.autoHideTip}>
                {this.$slots.default}
                {(() => {
                  if (this.$slots.tooltip) {
                    return <div slot="tooltip">{this.$slots.tooltip}</div>
                  }
                })()}
              </c-tooltip>
            )
          }
        })()}
        {(() => {
          if (!this.disable) {
            return (
              <span class={this.dotClass}>
                {(() => {
                  if (this.mode === 'count') {
                    return <span>{this.count > this.max ? `${this.max}+` : this.count}</span>
                  }
                })()}
              </span>
            )
          }
        })()}
      </span>
    )
  }
}
</script>

<style lang="less">
@import "styles/badge.less";
</style>
