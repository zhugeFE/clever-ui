<template>
  <div>
    <demo-panel
      subtitle="trigger为click时"
      jsFiddleName="h1qcofxd"
    >
      <div class="top row">
        <c-popover   
          :width="100"
          trigger="click"
          placement="top-left"
        >
          <template>
            <c-button >左上角</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
        <c-popover
          :width="100"
          trigger="click"
          placement="top"
        >
          <template >
            <c-button >上</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
        <c-popover
          :width="100"
          trigger="click"
          placement="top-right"
        >
          <template >
            <c-button>右上角</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
      </div>
      <div class="center row">
        <c-popover
          :width="100"
          trigger="click"
          placement="left"
        >
          <template >
            <c-button>左</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
        <c-popover
          :width="100"
          trigger="click"
          placement="right"
        >
          <template >
            <c-button>右</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
      </div>
      <div class="bottom row">
        <c-popover
          :width="100"
          trigger="click"
          placement="bottom-left"
        >
          <template >
            <c-button>左下角</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
        <c-popover
          :width="100"
          trigger="click"
          placement="bottom"
        >
          <template >
            <c-button>下</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
        <c-popover
          :width="100"
          trigger="click"
          placement="bottom-right"
        >
          <template >
            <c-button>右下角</c-button>
          </template>
          <div slot="popover">123456</div>
        </c-popover>
      </div>
    </demo-panel>
  </div>
</template>

<script>
import DemoPanel from '../../../components/demoPanel/index.vue'
import CPopover from '../../../../src/components/popover/popover.vue'

export default {
  components: {
    CPopover,
    DemoPanel
  },
  data() {
    return {
      show: false
    }
  },
  methods: {

  }
}
</script>
<style lang="sass" scoped>
.row
  width: 300px
  margin: 50px auto 0
  display: flex
  justify-content: space-between
  &:first-child
    margin-top: 0
</style>
