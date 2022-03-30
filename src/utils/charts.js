import util from './util'

class ChartsUtil {
  constructor (dom) {
    this.dom = dom
  }
  getOption() {
    const option = {
      color: this.colors,
      backgroundColor: 'white',
      grid: {
        containLabel: false,
        show: false,
        borderColor: 'red'
      },
      legend: this.getLegend(),
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
        }
      },
      xAxis: {
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: '#404245'
          }
        },
        splitArea: {
          show: false
        },
        splitLine: {
          show: Boolean(this.markLine),
          interval: this.markLine ? 0 : 'auto',
          lineStyle: {
            color: this.getMarkLine()
          }
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
    return option
  }
  getMaxLabelLength() {
    let rect = this.dom.getBoundingClientRect()
    const length = parseInt(rect.width / 2 / 12) // 宽度的一般再除以字体大小
    return length
  }
  getAxisPointerType() {
    let type = 'shadow'
    if (this.doubleY) {
      let haveBar = false
      for (const key in this.yAxisRule) {
        let rule = this.yAxisRule[key]
        if (rule.type === 'bar') haveBar = true
      }
      if (haveBar) return type
    }
    switch (this.type) {
      case 'bar':
        type = 'shadow'
        break
      case 'line':
      case 'area':
        type = 'line'
        break
      default:
        console.error('未支持的图表类型', this.type)
    }
    return type
  }
  getLegend() {
    let legendList = []
    this.each(function(name) {
      legendList.push({
        name
      })
    })
    let context = this
    return {
      type: 'scroll',
      data: legendList,
      borderColor: 'red',
      borderWidth: 0,
      width: '60%',
      show: this.legendShow || legendList.length > 1,
      formatter:
        this.legendFormatter ||
        function(label) {
          const maxLength = context.getMaxLabelLength()
          return util.strMiddleSplit(label, {
            maxLength,
            beginLength: maxLength / 2 - 2,
            endLength: maxLength / 2 - 2,
            replaceStr: '...'
          })
        },
      tooltip: {
        show: true,
        formatter(param) {
          const maxLength = context.getMaxLabelLength()
          return param.name
            .match(new RegExp(`\\S{1,${maxLength}}`, 'g'))
            .join('<br/>')
        }
      }
    }
  }
}

export default ChartsUtil
