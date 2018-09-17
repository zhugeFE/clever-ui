<template>
  <div class="c-cld-task" :style="style" :title="task.name" @click.stop="onClick">
    <span class="c-cld-mark" v-if="task.mark"></span>
    {{task.name}}
  </div>
</template>

<script type="text/jsx">
import {util} from '../../utils'
export default {
  name: 'cCalendarTask',
  props: {
    /**
     * @description 名称、开始时间、结束时间、描述、onClick
     */
    task: {
      type: Object,
      default () {
        return {
          name: '',
          beginDate: new Date(),
          endDate: new Date(),
          color: '', // 背景颜色
          mark: false, // 是否标记
          onClick: null // 点击回调
        }
      }
    },
    day: {
      type: Date
    },
    width: {
      type: Number
    }
  },
  computed: {
    dayCount () {
      return util.getTimeLong(this.task.beginDate, this.task.endDate)
    },
    // 如果当前日期是周日，并且任务的开始时间早于当前日期，结束时间晚于当前日期
    isCrossWeek () {
      return this.day.getDay() === 0 &&
        util.compareDays(this.day, this.task.beginDate) > 0 &&
        util.compareDays(this.day, this.task.endDate) < 0
    },
    showAble () {
      let isOneDay = util.isOneDay(this.task.beginDate, this.day)
      return isOneDay || this.isCrossWeek
    },
    style () {
      let dayCount = this.dayCount
      if (dayCount > (6 - this.day.getDay())) {
        dayCount = 6 - this.day.getDay() + 1
      }
      if (this.isCrossWeek) {
        dayCount = Math.min(util.getTimeLong(this.day, this.task.endDate) - 1, 7)
      }
      return {
        width: `${dayCount * this.width - 10}px`,
        background: this.task.color || util.colors[0]
      }
    }
  },
  methods: {
    onClick () {
      if (util.isFunction(this.task.onClick)) {
        this.task.onClick(this.task)
      }
    }
  }
}
</script>

<style lang="sass">
@import "../../assets/styles/constants"
.c-cld-task
  position: absolute
  font-size: $size-font-tip
  height: 18px
  line-height: 18px
  border-radius: $border-radius
  background: $color-action-primary-default
  margin-bottom: 5px
  color: $color-white
  padding: 0 5px
  text-overflow: ellipsis
  overflow: hidden
  white-space: nowrap
  word-break: keep-all
  &:hover
    background: $color-action-primary-hover
  .c-cld-mark
    display: inline-block
    width: 8px
    height: 8px
    border-radius: 50%
    border: 2px solid $color-white
    background: $color-danger
</style>
