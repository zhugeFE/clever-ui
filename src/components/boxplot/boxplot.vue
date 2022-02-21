<template>
  <div ref="container" class="container">
    盒须图
  </div>
</template>
<script>

export default {
  name: 'cBoxplot',
  props: {
  },
  data () {
    return {

    }
  },
  computed: {
    option() {
      let option = {
        color: this.colors,
        backgroundColor: 'white',
        grid: {
          containLabel: false,
          show: false,
          borderColor: 'red'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: '#999',
              width: 2,
              type: 'solid'
            }
          },
          textStyle: {
            fontSize: 12
          },
          formatter: this.tooltipFormat
        },
        xAxis: {
          data: this.getXAxis(),
          boundaryGap: false,
          axisLabel: {
            textStyle: {
              color: '#404245'
            }
          },
          splitArea: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          }
        },
        yAxis: this.getYAxis(),
        series: this.getSeries()
      }
      if (this.optionWrapper) {
        option = this.optionWrapper(option)
      }
      if (this.type === 'line') {
        option = this.dashedLineFormat(option)
      }
      return option
    }
  },
  mounted () {
    const chart = window.echarts.init(this.$refs.container)
    console.log(this.option)
    chart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: true,
        nameGap: 30,
        splitArea: {
          show: false
        },
        splitLine: {
          show: false
        },
        data: ['04-22', '04-23']
      },
      yAxis: {
        type: 'value',
        name: 'km/s minus 299,000',
        splitArea: {
          show: true
        }
      },
      series: [
        {
          name: 'boxplot',
          type: 'boxplot',
          data: [{
            name: 'aa',
            value: [1, 3, 4, 8, 20]
          },
          {
            name: 'bb',
            value: [1, 3, 4, 8, 20]
          }]
        },
        {
          name: 'outlier',
          type: 'scatter',
          data: [3, 8]
        }
      ]
    })
  }
}
</script>
<style lang="scss">
.container {
  height: 240px;
}
</style>
