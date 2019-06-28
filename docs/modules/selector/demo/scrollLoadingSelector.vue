<template>
  <div>
    <demo-panel title="下拉加载选择框">
      <c-selector
        :store="store"
        keyField="key"
        labelField="label"
        filter-option
        childrenField="children"
        :search="search"
        :pageSize="10"
        multiple
        v-model="value"
        :onShow="show"
        :onClose="close"
        :onBottomScroll="scroll"
      ></c-selector>
    </demo-panel>
  </div>
</template>

<script>
export default {
  name: 'scrollLoadingSelector',
  data () {
    return {
      pushNewData: false,
      loading: false,
      content: 100,
      value: null
    }
  },
  computed: {
    newStore () {
      let result = []
      result.push(...this.store)
      if (this.pushNewData) {
        result.push(...this.newStore)
      }
      return result
    },
    store () {
      let result = []
      for (let i = 0; i < 3; i++) {
        let item = {
          key: i,
          label: `第${i}个`,
          children: []
        }
        for (let j = 0; j < 10; j++) {
          item.children.push({
            key: j,
            label: `第${i}-${j}个`
          })
        }
        result.push(item)
      }
      return result
    },
    addStore () {
      let result = []
      for (let i = 1; i < 1; i++) {
        let item = {
          key: i,
          label: `第${i}个`,
          children: []
        }
        for (let j = 0; j < 10; j++) {
          item.children.push({
            key: j,
            label: `第${i}-${j}个`
          })
        }
        result.push(item)
      }
      return result
    }
  },
  methods: {
    close () {
      console.log('close')
    },
    show () {
      console.log('show')
    },
    addContent () {
      this.content = this.content += 10
      if (this.content === 300) {
        this.content = 100
      }
    },
    toggle () {
      this.loading = !this.loading
    },
    search (value) {
      console.log(value)
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
          console.log(this)
        }, 800)
      })
    },
    scroll () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log('请求完成')
          resolve()
        }, 800)
      })
    }
  },
  created () {
    // console.log(this.store)
  }
}
</script>
<style lang="sass">
.test
  width: 200px;
  max-height: 300px;
  border: 1px solid #000;
  overflow: auto
  height: 300px
.test-content
  height: 300px
  overflow: auto;
</style>
