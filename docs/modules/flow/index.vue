<template>
  <div>
    <zg-flow :echarts="echarts" :height="700" :width="1000" :data="dataObj" :title="title" :symbolSize="symbolSize" :lineLeriod="lineLeriod"></zg-flow>

    <doc-markdown :api="docJson" title="flow"></doc-markdown>
  </div>
</template>

<script>
import zlocal from '../../../src/i18n'
import * as echarts from 'echarts'
import DocMarkdown from '../../components/docMarkdown/index.vue'
import docJson from './flow.json'
export default {
  name: 'zgTreeDemo',
  comments: {
    DocMarkdown
  },
  data () {
    const {official, applet} = zlocal
    return {
      docJson,
      dataObj: {},
      title: [official, applet],
      echarts
    }
  },
  methods: {
    getPoints () {
      let num = Math.random()
      return {
        id: num,
        name: Math.floor(num * 100000),
        data: {
          num: Math.pow(Math.random() * 10, 2) * 200
        },
        value: Math.floor(num * 10000)
      }
    },
    symbolSize (item) {
      return Math.floor(Math.sqrt(item.data.num))
    },
    lineLeriod (data) {
      return Math.floor(Math.random() * 10)
    }
  },
  created () {
    let points = []
    let lines = []
    for (let i = 0; i < 4; i++) {
      let arr = []
      for (let j = 0; j < 5; j++) {
        arr.push(this.getPoints())
      }
      arr.sort((a, b) => {
        return a.data.num > b.data.num ? -1 : 1
      })
      points.push(arr)
    }
    points[0].forEach(item => {
      lines.push({
        points: [item, points[1][Math.floor(Math.random() * 5)]],
        data: {
          num: 1
        }
      })
    })
    points[3].forEach(item => {
      lines.push({
        points: [item, points[2][Math.floor(Math.random() * 5)]],
        data: {
          num: 2
        }
      })
    })

    lines.push({
      points: [points[1][0], points[2][1]],
      data: {
        num: 3
      }
    })
    lines.push({
      points: [points[2][1], points[1][0]],
      data: {
        num: 4
      }
    })
    this.dataObj = {
      points: points,
      lines: lines
    }
  }
}
</script>

<style lang="sass">

</style>
