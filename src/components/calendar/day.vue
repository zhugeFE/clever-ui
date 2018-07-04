<template>
  <td :class="dayClass" :style="style" @click="onClickDay">
    <div class="zg-cld-day-container">
      <div class="zg-cld-label">
        <span class="zg-day-num">{{dateFormat(day)}}</span>日
      </div>
      <div class="zg-cld-task-panel">
        <template v-for="task in taskList">
          <zg-calendar-task :task="task"
                            :width="width"
                            :day="day" :key="task.name"></zg-calendar-task>
        </template>
      </div>
    </div>
  </td>
</template>

<script>
import {util} from '../../utils'
import ZgCalendarTask from './task'
export default {
  name: 'zgDay',
  components: {ZgCalendarTask},
  props: {
    day: {
      type: Date
    },
    width: {
      type: Number
    },
    currentDay: {
      type: Date
    },
    currentMonth: null,
    /**
     * @description 任务列表，任务属性：名称、开始时间、结束时间、描述、onClick
     */
    taskList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    dayClass () {
      let week = this.day.getDay()
      let isOtherMonth = this.currentMonth.value !== this.day.getMonth()
      let isToday = util.dateFormat(new Date()) === util.dateFormat(this.day)
      let isCurrent = util.dateFormat(this.currentDay) === util.dateFormat(this.day)
      return {
        'zg-cld-day': true,
        'zg-cld-secondary': !week || week === 6 || isOtherMonth,
        'zg-cld-today': isToday,
        'zg-cld-active': isCurrent
      }
    },
    style () {
      return {
        width: this.width + 'px',
        height: this.width / 4 * 3 + 'px'
      }
    },
    taskStyle () {
      return {
        width: `${this.width - 10}px`
      }
    }
  },
  methods: {
    dateFormat (date) {
      return util.dateFormat(date, 'dd')
    },
    onClickDay () {
      this.$emit('click', this.day)
    },
    isValidTask (task) {
      let flag = true
      if ((task.beginDate.getTime() - this.day.getTime()) / util.dayTime > 1 ||
        (task.endDate.getTime() - this.day.getTime()) / util.dayTime < 0) {
        flag = false
      }
      return flag
    },
    onClickTask (task) {
      if (util.isFunction(task.onClick)) {
        task.onClick(task)
      }
    }
  }
}
</script>

<style lang="sass">
@import "styles/day"
</style>
