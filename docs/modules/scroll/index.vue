<template>
<div>
  <div class="scroll-demo">
    <zg-scroll-container>
      <div>
        <zg-scroll-lazy-panel class="handle-area" @show="status1 = true" @hide="status1 = false" :once="once">
          <div class="child">1</div>
        </zg-scroll-lazy-panel>
      </div>
      <div class="child">2</div>
      <div class="child">3</div>
      <div class="child">4</div>
      <zg-scroll-lazy-panel class="margin-panel handle-area"  @show="status5 = true" @hide="status5 = false" :once="once">
        <div class="child">5</div>
      </zg-scroll-lazy-panel>
      <zg-scroll-lazy-panel class="handle-area"  @show="status6 = true" @hide="status6 = false" :once="once">
        <div class="child">6</div>
      </zg-scroll-lazy-panel>
      <div class="child">7</div>
      <div class="child">8</div>
      <zg-scroll-container class="inner-container">
        <zg-scroll-lazy-panel class="handle-area"  @show="status9 = true" @hide="status9 = false" :once="once">
          <div class="child">9</div>
        </zg-scroll-lazy-panel>
      </zg-scroll-container>
    </zg-scroll-container>
    <div>
      <br>
      <p>handle滚动事件的<span class="handle-area">元素</span></p>
      <br>
      <zg-radio :store="store" v-model="radioValue"></zg-radio>
      <br><br>
      <p>1 当前是否在可视区域：{{status1}}</p>
      <p>5 当前是否在可视区域：{{status5}}</p>
      <p>6 当前是否在可视区域：{{status6}}</p>
      <p>9 当前是否在可视区域（相对于它的父元素）：{{status9}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'scroll',
  data () {
    return {
      status1: false,
      status5: false,
      status6: false,
      status9: false,
      store: [{
        value: 1,
        label: '触发一次show事件后不再触发事件'
      }, {
        value: 2,
        label: '可以反复触发'
      }],
      radioValue: 1
    }
  },
  computed: {
    once () {
      return this.radioValue === 1
    }
  }
}
</script>

<style lang="sass">
.scroll-demo
  height: 500px
  max-width: 500px
  border: 1px solid #D1D1D1
  .child
    height: 200px
    width: 200px
    margin: 5px 0
    line-height: 200px
    background: #f3f5ef
    text-align: center
  .margin-panel
    margin: 0 510px
    display: inline-block
  .handle-area
    background: #ffad00e6
    .child
      background: rgba(52, 52, 52, 0.1)
  .inner-container
    background: #d0cabc
</style>
