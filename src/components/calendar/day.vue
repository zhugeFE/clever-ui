<template>
  <td :class="dayClass" :style="style" @click="onClickDay">
    <div class="zg-cld-day-container">
      <div class="zg-cld-label">
        <span class="zg-day-num">{{dateFormat(day)}}</span>日
      </div>
      <div class="zg-cld-task-panel">
        <template v-for="(task, i) in validTaskList">
          <zg-calendar-task :task="task"
                            :width="width"
                            :day="day"
                            :style="{top: `${getTopVal(task, i)}px`}"
                            :key="task.name"></zg-calendar-task>
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
    validTaskList () {
      let res = []
      this.taskList.forEach(item => {
        if (this.isValidTask(item)) {
          res.push(item)
        }
      })
      return res
    },
    positionList () {
      let positionList = []
      let affectList = [] // 前置影响因子任务
      let crossToday = []
      let validCount = 0
      this.taskList.forEach((item, i) => {
        // if (util.dateFormat(this.day) === '2018-07-07') debugger
        if (this.isValidTask(item)) {
          let position = 0
          if (validCount < affectList.length) { // affectList位置还没占完时
            position = validCount // + Math.max(crossToday.length - affectList.length, 0)
          } else { // affectList位置已经被占完了
            position = validCount + crossToday.length
          }
          positionList.push({
            task: item,
            list: {
              affect: util.clone(affectList).map(item => item.name),
              cross: util.clone(crossToday).map(item => item.name)
            },
            /**
             * 对于位置来说，贯穿当天的任务和前置影响因子任务，可以相互抵消占位，剩下贯穿当天的任务数，就是当前任务应该定位下移的任务个数
             */
            position
          })
          validCount++
        }
        // 如果开始和结束时间都小于今天，但是结束时间，大于等于某一个后续任务的开始时间，则认为当前任务是前置影响因子任务
        if (util.compareDays(this.day, item.beginDate) > 0 &&
          util.compareDays(this.day, item.endDate) > 0) { // 代表这是一个完全过期的时间
          let flag = false
          this.taskList.forEach((task, j) => {
            if (j <= i) return
            if (util.compareDays(item.endDate, task.beginDate) >= 0 && // 当前的任务结束时间大于等于后续任务的开始时间
              util.compareDays(task.endDate, this.day) >= 0) { // 并且后续任务的结束时间大于等于当前时间
              flag = true
            }
          })
          if (flag) affectList.push(item)
        }
        // 贯穿今天的
        if (util.compareDays(this.day, item.beginDate) > 0 &&
          util.compareDays(this.day, item.endDate) <= 0 && this.day.getDay() !== 0) {
          crossToday.push(item)
          // 当前任务开始时间晚于前置影响任务的结束时间时，该事件会占去前置影响任务空出来的位置
          affectList.forEach(task => {
            if (util.compareDays(item.beginDate, task.endDate) > 0) {
              affectList.splice(0, 1)
            }
          })
        }
      })
      console.log('>>.', util.dateFormat(this.day), util.clone(positionList))
      return positionList
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
      let isOneDay = util.isOneDay(task.beginDate, this.day)
      // 如果当前日期是周日，并且任务的开始时间早于当前日期，结束时间晚于当前日期
      let crossWeek = this.day.getDay() === 0 &&
        util.compareDays(this.day, task.beginDate) > 0 &&
        util.compareDays(this.day, task.endDate) < 0
      return isOneDay || crossWeek
    },
    getTopVal (task) {
      let preCount = this.positionList.find(item => task === item.task).position
      return preCount * 20 + 5
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
