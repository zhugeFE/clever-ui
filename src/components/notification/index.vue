<script type="text/jsx">
import Vue from 'vue'
import CButton from '../button/button'
const Notification = Vue.extend({
  components: {
    CButton
  },
  data () {
    return {
      className: '', // 自定义class
      width: 255,
      content: 'content', // 提醒内容
      duration: 4.5, // 自动关闭时间，单位秒,默认4.5秒后自动关闭
      icon: '', // 自定义图标
      title: 'title', // 标题
      placement: 'topRight', // 弹出位置可选 topLeft topRight bottomLeft bottomRight
      onClose: () => {} // 点击默认关闭按钮时触发的回调
    }
  },
  computed: {
    clazz () {
      let clazz = {
        'c-notification': true
      }
      if (this.className) clazz[this.className] = true
      return clazz
    },
    style () {
      return {
        width: this.width + 'px'
      }
    }
  },
  methods: {
    close () {
      this.$destroy()
      this.$el.remove()
      this.$emit('close')
    },
    timeout () {
      setTimeout(() => {
        this.close()
      }, this.duration * 1000)
    }
  },
  mounted () {
    if (this.duration) {
      this.timeout()
    }
  },
  render (h) {
    return (
      <div class={this.clazz} style={this.style}>
        <div class="c-notification_">
          {(() => {
            if (this.icon) {
              return (
                <i class={this.icon}></i>
              )
            }
          })()}
          <div class="c-notification-center">
            <div class="c-notification-title">{this.title}</div>
            <div class="c-notification-content" domPropsInnerHTML={this.content}></div>
          </div>
        </div>
        <c-button onClick={this.close} type="primary">知道了</c-button>
      </div>
    )
  }
})

export default Notification
</script>

<style lang="sass">
@import "styles/index"
</style>
