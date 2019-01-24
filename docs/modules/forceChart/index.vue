<template>
  <div>
    <zg-force-chart :echarts="echarts" :height="640" :data="dataObj" :linkToolTipFormatter="linkToolTipFormatter"></zg-force-chart>
    <doc-markdown :api="docJson" title="forceChart"></doc-markdown>
  </div>
</template>

<script>
import echarts from 'echarts'
import DocMarkdown from '../../components/docMarkdown/index.vue'
import docJson from './forceChart.json'
export default {
  name: 'zgTreeDemo',
  comments: {
    DocMarkdown
  },
  data () {
    return {
      docJson,
      echarts,
      dataObj: {}
    }
  },
  methods: {
    linkToolTipFormatter () {
      return '---->'
    }
  },
  created () {
    let nodes = []
    let links = []
    for (let i = 0; i < 20; i++) {
      let value = Math.floor(60 * Math.random())
      nodes.push({
        id: i + 1,
        name: 'node:' + i,
        value: value,
        symbol: 'path://M10.6666667,3 C8.62365591,3 6.58064516,4.5920398 6.58064516,5.98507463 L6.58064516,8.07462687 C6.58064516,8.97014925 7.01075269,10.761194 8.30107527,11.7562189 L4.86021505,13.4477612 C4.86021505,13.4477612 4,13.8457711 4,14.2437811 L4,15.5373134 C4,16.0348259 4.43010753,16.3333333 4.86021505,16.3333333 L16.4731183,16.3333333 C17.0107527,16.3333333 17.3333333,15.9353234 17.3333333,15.5373134 L17.3333333,14.2437811 C17.3333333,13.7462687 16.4731183,13.4477612 16.4731183,13.4477612 L13.0322581,11.7562189 C14.3225806,10.8606965 14.6451613,9.06965174 14.6451613,8.07462687 L14.6451613,5.98507463 C14.6451613,4.5920398 12.6021505,3 10.6666667,3 Z'
      })
    }
    let startNum = nodes.length
    for (let i = 0; i < 10; i++) {
      let value = 160
      nodes.push({
        id: startNum + i + 1,
        name: 'node:' + i,
        value: value,
        symbol: 'image://http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaEKsuQfdDFMnVf1NQE4hHOBmsFyWV9aks0GiaULnV5GSlgicF1wRicIfmVmiaAvhxyrPd7areRNYuWcSVg/132'
      })
    }

    nodes.forEach((item, index) => {
      links.push({
        id: index,
        name: null,
        source: item.id,
        sourceObj: {
          name: '123'
        },
        target: Math.floor(Math.random() * nodes.length),
        targetObj: {
          name: '456'
        }
      })
      links.push({
        id: index,
        name: null,
        source: Math.floor(Math.random() * nodes.length),
        sourceObj: {
          name: '123'
        },
        target: item.id,
        targetObj: {
          name: '456'
        }
      })
    })

    this.dataObj = {
      nodes: nodes,
      links: links
    }
  }
}
</script>

<style lang="sass">

</style>
