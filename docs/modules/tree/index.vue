<template>
  <div>
    树状图伸展方向：
    <zg-radio-button :store="radioList" v-model="radioValue">
      <template slot-scope="scope">
        <zg-button type="normal"
                    theme="border"
                    :class="scope.className"
                    @click="scope.onClick">{{scope.data.value}}</zg-button>
      </template>
    </zg-radio-button>
    <zg-tree v-if="showTree" :dataList="list" :direction="radioValue" @nodeClick="onNodeClick"></zg-tree>

    <doc-markdown :api="docJson" title="tree"></doc-markdown>
  </div>
</template>

<script>
import DocMarkdown from '../../components/docMarkdown/index.vue'
import json from './dataList.json'
import docJson from './tree.json'
import {util} from '../../../src/utils'
export default {
  name: 'zgTreeDemo',
  comments: {
    DocMarkdown
  },
  data () {
    return {
      docJson,
      list: [],
      showTree: true,
      radioValue: 'right-left',
      radioList: [
        {
          value: 'right-left'
        },
        {
          value: 'left-right'
        },
        {
          value: 'top-bottom'
        },
        {
          value: 'bottom-top'
        }
      ]
    }
  },
  methods: {
    getDataList (list, count) {
      let result = []
      let item = {}
      for (let i = 0; i < list.length; i++) {
        item = list[i] || {}
        result.push({
          children: item.children ? this.getDataList(item.children, item.count) : [],
          name: item.name,
          disabled: item.disabled,
          label: count ? util.percentCalculate(item.count, count) : ''
        })
      }
      return result
    },
    onNodeClick (obj) {
      console.log(obj)
    }
  },
  watch: {
    radioValue () {
      this.showTree = false
      this.$nextTick(() => {
        this.showTree = true
      })
    }
  },
  created () {
    this.list = this.getDataList(json.behavior_datas)
  }
}
</script>

<style lang="less">

</style>
