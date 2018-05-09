<script type="text/jsx">
  import Vue from 'vue'
  const Message = Vue.extend({
    data () {
      return {
        // success error info
        type: 'success',
        message: '',
        autoHide: true,
        duration: 3000,
        icon: ''
      }
    },
    computed: {
      messageClass () {
        let clazz = {
          'zg-message': true
        }
        clazz[`zg-${this.type}`] = true
        return clazz
      },
      iconClass () {
        if (this.icon) return ['zg-icon', this.icon]
        return {
          'zg-icon': true,
          'zgicon-error_filled': this.type === 'error',
          'zgicon-check_filled': this.type === 'success'
        }
      }
    },
    methods: {
      close () {
        this.$destroy()
        this.$el.remove()
      },
      timeout () {
        setTimeout(() => {
          this.close()
        }, this.duration)
      }
    },
    mounted () {
      if (this.autoHide) {
        this.timeout()
      }
    },
    render (h) {
      return (
        <div class={this.messageClass}>
          <i class={this.iconClass}></i>
          <span class="zg-msg-content">{this.message}</span>
          {(() => {
            if (!this.autoHide) {
              return (
                <i onClick={this.close} class="zg-close zgicon-delete-little1"></i>
              )
            }
          })()}
        </div>
      )
    }
  })

  export default Message
</script>

<style lang="sass">
@import "styles/message"
</style>
