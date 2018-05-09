<template>
  <div class="demo-panel">
    <h3 class="title" v-if="title">{{title}}</h3>
    <p class="subtitle" v-if="subtitle">{{subtitle}}</p>
    <div class="wrap-box">
      <div class="demo-box">
        <slot></slot>
      </div>
      <div v-if="jsFiddleName" :class="['js-fiddle']" :style="jsFiddleStyle">
        <iframe width="100%" :src="showJsFiddleUrl" frameborder="0" :style="jsFiddleIframeStyle"></iframe>
      </div>
      <!--<div v-if="jsFiddleName" class="demo-block-control" @click="onClickControl">-->
        <!--<span v-show="!this.showJsFiddle">显示代码</span>-->
        <!--<span v-show="this.showJsFiddle">隐藏代码</span>-->
      <!--</div>-->
    </div>
  </div>
</template>
<script>
// import jsFiddle from "../../common/jsFiddle"
export default {
  name: 'demoPanel',
  props: {
    title: String,
    subtitle: {
      type: String,
      default: ''
    },
    jsFiddleName: String
  },
  data () {
    return {
      showJsFiddle: false,
      showJsFiddleUrl: '',
      iframeHeight: 0,
      jsFiddleStyle: {
        height: 0
      },
      jsFiddleIframeStyle: {
        height: 0
      }
    }
  },
  created () {
    // jsFiddle.addMessageListener({
    //   slug: this.jsFiddleName,
    //   callback: this.onMessage
    // })
  },
  methods: {
    onMessage (height) {
      height = parseInt(height) || 310
      this.iframeHeight = height + 40
      this.showCodeView()
    },
    showCodeView () {
      this.jsFiddleStyle.height = this.iframeHeight + 3 + 'px'
      this.jsFiddleIframeStyle.height = this.iframeHeight + 'px'
    },
    hideCodeView () {
      this.jsFiddleStyle.height = 0
      this.jsFiddleIframeStyle.height = 0
    },
    onClickControl () {
      this.showJsFiddle = !this.showJsFiddle
      if (this.showJsFiddle) {
        if (!this.showJsFiddleUrl) {
          this.showJsFiddleUrl = `//jsfiddle.net/worriedk/${this.jsFiddleName}/embedded/js,html/`
        }
        if (this.iframeHeight) {
          this.showCodeView()
        }
      } else {
        this.hideCodeView()
      }
    }
  }
}
</script>
<style lang="sass" scoped>
@import "./styles/index.sass"
</style>
