<template>
  <div class="main">
    <div class="left-guide">
      <ul>
        <li v-for="item in menuObjList" :key="item.routerName">
          <router-link :class="['router-link', {'is-active': isActive(item.routerName)}]" :to="item.routerName">{{item.alias}}</router-link>
        </li>
      </ul>
    </div>
    <keep-alive>
      <router-view class="content"></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      menuList: [
        'overview',
        'button',
        'input',
        'checkbox',
        'popover',
        'radio',
        'select',
        'grid',
        'pagination',
        'calendar',
        'datePicker',
        'tooltip',
        'badge',
        'loading',
        'tab',
        'tag',
        'message',
        'notification',
        'dialog',
        'charts',
        'boxplot',
        'reload',
        'scroll',
        'tree',
        'flow',
        'forceChart'
      ]
    }
  },
  computed: {
    menuObjList () {
      let result = []
      this.menuList.map((item) => {
        if (typeof item === 'object') {
          result.push({
            alias: item.alias || item.routerName,
            routerName: item.routerName
          })
        } else {
          result.push({
            alias: item,
            routerName: item
          })
        }
      })
      return result
    }
  },
  methods: {
    isActive (name) {
      return this.$route.name === name
    }
  }
}
</script>
<style lang="sass" scoped>
.main
  width: 100%
  height: 100%
  display: flex
  flex-direction: row
  .left-guide
    width: 250px
    height: 100%
    border-right: 1px solid #D1D1D1
    background: #FAFAFA
    text-align: center
    overflow-y: auto
    ul li
      list-style: none
    .router-link
      height: 40px
      line-height: 40px
      font-size: 14px
      color: #5e6d82
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
      text-decoration: none
      display: block
      border-bottom: 1px solid #D1D1D1
      color: #75787D
      &:hover
        color: #0EA1EB
    .is-active
      color: #0EA1EB
  .content
    width: 100%
    padding: 15px 15px 30px 15px
    overflow: auto
</style>
