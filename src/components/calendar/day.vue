<template>
  <td :class="dayClass" @click="onClickDay">
    <div class="zg-cld-day-container">
      <div class="zg-cld-label">
        <span class="zg-day-num">{{dateFormat(day)}}</span>日
      </div>
      <ul class="zg-cld-task-list">
        <template v-for="(task, i) in taskList">
          <li class="zg-cld-task"
              :style="taskStyle"
              :title="task.desc"
              v-if="isValidTask(task)"
              @click="onClickTask(task)"
              :key="task.name + '_' + i">
            {{task.desc}}
          </li>
        </template>
      </ul>
    </div>
  </td>
</template>

<script>
import {util} from '../../utils'
export default {
  name: 'zgDay',
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
  data () {
    return {
      msg: 'day'
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
