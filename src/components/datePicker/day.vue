<template>
  <td :class="clazz"
      @click="onClick(day)">
    {{dateFormat(day)}}
  </td>
</template>

<script>
import {util} from '../../utils'
export default {
  name: 'c-picker-day',
  props: {
    day: {
      type: Date,
      default () {
        return new Date()
      }
    },
    chosenDate: {
      type: Date,
      default () {
        return new Date()
      }
    },
    currentDate: {
      type: Date,
      default () {
        return new Date()
      }
    },
    /**
     * 最小时间
     */
    min: {
      type: Date
    },
    /**
     * 最大时间
     */
    max: {
      type: Date
    },
    /**
     * 高亮的起始日期
     */
    highlightStart: {
      type: Date
    },
    /**
     * 高亮的结束日期
     */
    highlightEnd: {
      type: Date
    }
  },
  data () {
    return {
      msg: 'day'
    }
  },
  computed: {
    disable () {
      window.util = util
      return (this.min && util.compareDays(this.day, this.min) < 0) ||
        (this.max && util.compareDays(this.day, this.max) > 0)
    },
    highlight () {
      return (this.highlightStart && util.compareDays(this.day, this.highlightStart) >= 0 &&
        (this.highlightEnd && util.compareDays(this.day, this.highlightEnd) <= 0))
    },
    clazz () {
      let clazz = {
        'c-day': true,
        'c-other-month': this.isOtherMonth(this.day),
        'c-checked': util.isOneDay(this.day, this.chosenDate),
        'c-today': util.isOneDay(this.day, new Date()),
        'c-disable': this.disable,
        'c-highlight-day': this.highlight
      }
      return clazz
    }
  },
  methods: {
    dateFormat (date) {
      return util.dateFormat(date, 'dd')
    },
    isOtherMonth (day) {
      return new Date(day).getMonth() !== this.currentDate.getMonth()
    },
    onClick (day) {
      if (this.disable) return
      this.$emit('click', day)
    }
  }
}
</script>

<style lang="sass">
@import "styles/day"
</style>
