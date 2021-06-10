<template>
  <div>
    <demo-panel title="tooltip" subtitle="普通应用" jsFiddleName="8xn7yac5">
      <div class="top row">
        <c-tooltip content="placement is top-left" placement="top-left">
          <span class="span">上左</span>
        </c-tooltip>

        <c-tooltip content="placement is top" placement="top">
          <span class="span">上</span>
        </c-tooltip>

        <c-tooltip content="placement is top-right" placement="top-right">
          <span class="span">上右</span>
        </c-tooltip>
      </div>
      <div class="center-top row">
        <c-tooltip content="placement is left-top" placement="left-top">
          <span class="span">左上</span>
        </c-tooltip>

        <c-tooltip content="placement is right-top" placement="right-top">
          <span class="span">右上</span>
        </c-tooltip>
      </div>
      <div class="center row">
        <c-tooltip content="placement is left" placement="left">
          <span class="span">左</span>
        </c-tooltip>

        <c-tooltip content="placement is right" placement="right">
          <span class="span">右</span>
        </c-tooltip>
      </div>
      <div class="center-bottom row">
        <c-tooltip content="placement is left-bottom" placement="left-bottom">
          <span class="span">左下</span>
        </c-tooltip>

        <c-tooltip content="placement is right-bottom" placement="right-bottom">
          <span class="span">右下</span>
        </c-tooltip>
      </div>
      <div class="bottom row">
        <c-tooltip content="placement is bottom-left" placement="bottom-left">
          <span class="span">下左</span>
        </c-tooltip>

        <c-tooltip content="placement is bottom" placement="bottom">
          <span class="span">下</span>
        </c-tooltip>

        <c-tooltip content="placement is bottom-right" placement="bottom-right">
          <span class="span">下右</span>
        </c-tooltip>
      </div>
    </demo-panel>
  </div>
</template>

<script>
  import DemoPanel from '../../../components/demoPanel/index.vue'

  export default {
    components: {DemoPanel},
    name: 'normalTooltip',
    data () {
      return {
        msg: 'normalTooltip'
      }
    }
  }
</script>

<style lang="less">
.span {
  box-sizing: border-box;
  display: inline-block;
  border: 1px solid darkgray;
  border-radius: 3px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0 5px;
}

.row {
  width: 350px;
  margin: 0 auto;
}

.center, .center-top, .center-bottom {
  margin: 5px auto;

  & span:last-child {
    float: right;
  }
}

.top, .bottom {
  width: 200px;
}
</style>
