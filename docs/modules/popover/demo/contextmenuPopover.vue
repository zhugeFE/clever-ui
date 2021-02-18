<template>
  <div>
    <demo-panel subtitle="右键触发">
      <c-popover :width="150" trigger="contextmenu">
        <div class="triggerArea">Right Click on here</div>
        <template slot="popover">
          <ul>
            <li><button @click="clickHandle">menu item 1</button></li>
            <li><button>menu item 2</button></li>
            <li><button>menu item 3</button></li>
            <li><button>menu item 4</button></li>
          </ul>
        </template>
      </c-popover>
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
    }
  },
  methods: {
    clickHandle() {
      alert('menu item 1被点击了')
    }
  }
}
</script>

<style lang="sass" scoped>
.triggerArea
  text-align: center
  line-height: 400px
  width: 900px
  height: 400px
  background-color: rgb(247, 247, 247)
ul
  li
    &:nth-child(n+2)
      margin-top: 10px
    button
      width: 100%
      height: 34px
      background: #FFFFFF
      border-radius: 2px
      border: 1px solid #D1D1D1
      cursor: pointer
</style>
