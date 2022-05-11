<template>
  <div>
    <demo-panel title="tooltip" subtitle="普通应用" jsFiddleName="8xn7yac5">
      <div class="top row">
        <c-tooltip content="placement is top-left" placement="top-left">
          <span class="span">{{zlocal.tooltipTopleft}}</span>
        </c-tooltip>

        <c-tooltip content="placement is top" placement="top">
          <span class="span">{{zlocal.tooltipTop}}</span>
        </c-tooltip>

        <c-tooltip content="placement is top-right" placement="top-right">
          <span class="span">{{zlocal.tooltipTopright}}</span>
        </c-tooltip>
      </div>
      <div class="center-top row">
        <c-tooltip content="placement is left-top" placement="left-top">
          <span class="span">{{zlocal.tooltipLefttop}}</span>
        </c-tooltip>

        <c-tooltip content="placement is right-top" placement="right-top">
          <span class="span">{{zlocal.tooltipRighttop}}</span>
        </c-tooltip>
      </div>
      <div class="center row">
        <c-tooltip content="placement is left" placement="left">
          <span class="span">{{zlocal.tooltipLeft}}</span>
        </c-tooltip>

        <c-tooltip content="placement is right" placement="right">
          <span class="span">{{zlocal.tooltipRight}}</span>
        </c-tooltip>
      </div>
      <div class="center-bottom row">
        <c-tooltip content="placement is left-bottom" placement="left-bottom">
          <span class="span">{{zlocal.tooltipLeftbottom}}</span>
        </c-tooltip>

        <c-tooltip content="placement is right-bottom" placement="right-bottom">
          <span class="span">{{zlocal.tooltipRightbottom}}</span>
        </c-tooltip>
      </div>
      <div class="bottom row">
        <c-tooltip content="placement is bottom-left" placement="bottom-left">
          <span class="span">{{zlocal.tooltipBottomleft}}</span>
        </c-tooltip>

        <c-tooltip content="placement is bottom" placement="bottom">
          <span class="span">{{zlocal.tooltipBottom}}</span>
        </c-tooltip>

        <c-tooltip content="placement is bottom-right" placement="bottom-right">
          <span class="span">{{zlocal.tooltipBottomright}}</span>
        </c-tooltip>
      </div>
    </demo-panel>
  </div>
</template>

<script>
import zlocal from '../../../../src/i18n'
import DemoPanel from '../../../components/demoPanel/index.vue'

export default {
  components: {DemoPanel},
  name: 'normalTooltip',
  data () {
    const {tooltipTopleft, tooltipTop, tooltipTopright, tooltipRighttop, tooltipRight, tooltipRightbottom, tooltipBottomright, tooltipBottom, tooltipBottomleft, tooltipLeftbottom, tooltipLeft, tooltipLefttop} = zlocal
    return {
      msg: 'normalTooltip',
      zlocal: {
        tooltipTopleft, tooltipTop, tooltipTopright, tooltipRighttop, tooltipRight, tooltipRightbottom, tooltipBottomright, tooltipBottom, tooltipBottomleft, tooltipLeftbottom, tooltipLeft, tooltipLefttop
      }
    }
  }
}
</script>

<style lang="sass">
  .span
    padding: 0 12px
    box-sizing: border-box
    display: inline-block
    border: 1px solid darkgray
    border-radius: 3px
    min-width: 50px
    height: 50px
    line-height: 50px
    text-align: center
    margin: 0 5px
  .row
    width: 540px
    margin: 0 auto
  .center, .center-top, .center-bottom
    margin: 5px auto
    & span:last-child
      float: right
  .top, .bottom
    width: 350px
    text-align: center
</style>
