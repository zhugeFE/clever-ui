<script type="text/jsx">
import Vue from 'vue'
import clickOutside  from '../../directives/clickOutside.js'
export default Vue.extend({
  data() {
    return {
      content: null,
      hideHandle:null,
    }
  },
  directives:{
    clickOutside
  },
  beforeDestroy() {
    this.$el.remove()
  },
  methods: {
    clickOutSideHandle() {
      this.hideHandle&&this.hideHandle()
    }
  },
  render(h) {
    return (
      <div v-clickOutside={this.clickOutSideHandle} class="c-popover-content">
          { this.content }
      </div>
    )
  }

})
</script>