<template>
  <div class="zg-calendar-container" ref="main" v-resize="onResize">
    <div class="zg-cld-toolbar">
      <zg-selector :store="yearList"
                   :width="100"
                   class="zg-cld-year"
                   @change="onChangeYear"
                   v-model="currentYear"
                   key-field="value"
                   label-field="label"></zg-selector>
      <zg-selector :store="monthList"
                   :width="100"
                   @change="onChangeMonth"
                   class="zg-cld-month-selector"
                   v-model="currentMonth"
                   key-field="value"
                   label-field="label"></zg-selector>
      <span class="zg-cld-day-control">
        <zg-button size="normal" icon="zgicon-arrow-left" @click="onPreDay"></zg-button>
        <zg-button size="normal" @click="onClickDay(new Date())">今天</zg-button>
        <zg-button size="normal" icon="zgicon-arrow-right1" @click="onNextDay"></zg-button>
      </span>
    </div>
    <table class="zg-cld">
      <thead class="zg-cld-title">
      <tr>
        <td class="zg-cld-secondary">周日</td>
        <td>周一</td>
        <td>周二</td>
        <td>周三</td>
        <td>周四</td>
        <td>周五</td>
        <td class="zg-cld-secondary">周六</td>
      </tr>
      </thead>
      <tbody class="zg-cld-body">
      <tr v-for="(week, i) of days" :key="i">
        <zg-day v-for="day of week"
                :key="day.toLocaleString()"
                :day="day"
                :width="dayWidth"
                :currentDay="currentDay"
                :currentMonth="currentMonth"
                :taskList="_taskList"
                @click="onClickDay"/>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {util} from '../../utils'
import ZgDay from './day'
export default {
  name: 'zgCalendar',
  components: {ZgDay},
  props: {
    /**
     * @description v-model绑定值，选定的日期
     */
    value: {
      type: Date
    },
    /**
     * @description 展示类型，card：用于嵌套在空间有限的容器中，mini类型的日历卡片
     */
    type: {
      type: String,
      default: 'normal',
      validator (type) {
        return ['normal', 'card'].includes(type)
      }
    },
    /**
     * @description 当前的视图模式：年、月、周、日
     * todo 目前只支持月
     */
    mode: {
      type: String,
      default: 'month',
      validator (mode) {
        return ['month', 'year', 'week', 'day'].includes(mode)
      }
    },
    /**
     * @description 任务列表，任务属性：名称、开始时间、结束时间、描述、onClick、color
     */
    taskList: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    let currentDay = this.value || new Date()
    return {
      days: this.getDays(currentDay),
      dayWidth: 50,
      currentDay,
      currentMonth: {
        value: currentDay.getMonth()
      },
      monthList: (() => {
        let list = []
        for (let i = 0; i < 12; i++) {
          list.push({
            label: (i + 1) + '月',
            value: i
          })
        }
        return list
      })(),
      currentYear: {value: currentDay.getFullYear()},
      yearList: (() => {
        let list = []
        let currentYear = currentDay.getFullYear()
        for (let i = currentYear - 10; i < currentYear + 10; i++) {
          list.push({
            label: i,
            value: i
          })
        }
        return list
      })()
    }
  },
  computed: {
    _taskList () {
      let list = this.taskList.map(item => item)
      list.sort((a, b) => {
        return a.beginDate.getTime() - b.beginDate.getTime()
      })
      return list
    }
  },
  mounted () {
    this.onResize()
  },
  methods: {
    dateFormat (date) {
      return util.dateFormat(date, 'dd')
    },
    onResize () {
      let container = this.$refs.main
      this.dayWidth = container.offsetWidth / 7
    },
    getDayClass (day) {
      let week = day.getDay()
      let isOtherMonth = this.currentMonth.value !== day.getMonth()
      let isToday = util.dateFormat(new Date()) === util.dateFormat(day)
      let isCurrent = util.dateFormat(this.currentDay) === util.dateFormat(day)
      return {
        'zg-cld-day': true,
        'zg-cld-secondary': !week || week === 6 || isOtherMonth,
        'zg-cld-today': isToday,
        'zg-cld-active': isCurrent
      }
    },
    getDays (currentDay) {
      let firstDay = new Date(currentDay.getFullYear(), currentDay.getMonth(), 1)
      let lastDay = new Date(new Date(currentDay.getFullYear(), currentDay.getMonth() + 1, 1).getTime() - util.dayTime)
      let firstOfWeek = new Date(firstDay.getTime() - firstDay.getDay() * util.dayTime)
      let lastOfWeek = new Date(lastDay.getTime() + (6 - lastDay.getDay()) * util.dayTime)
      let totalDays = (lastOfWeek.getTime() - firstOfWeek.getTime()) / util.dayTime + 1
      let days = []
      let week = []
      for (let i = 0; i < totalDays; i++) {
        let date = new Date(firstOfWeek.getTime() + i * util.dayTime)
        if (!date.getDay()) { // 周的第一天
          week = []
        }
        week.push(date)
        if (date.getDay() === 6) { // 周的最后一天
          days.push(util.clone(week))
        }
      }
      return days
    },
    onChangeYear () {
      this.days = this.getDays(new Date(this.currentYear.value, this.currentMonth.value, 1))
    },
    onChangeMonth () {
      this.days = this.getDays(new Date(this.currentYear.value, this.currentMonth.value, 1))
    },
    onClickDay (day) {
      this.currentYear = {
        value: day.getFullYear()
      }
      this.currentMonth = {
        value: day.getMonth()
      }
      this.days = this.getDays(day)
      this.currentDay = day
      this.$emit('input', day)
      this.$emit('selectDay', day)
    },
    onNextDay () {
      this.onClickDay(new Date(this.currentDay.getTime() + util.dayTime))
    },
    onPreDay () {
      this.onClickDay(new Date(this.currentDay.getTime() - util.dayTime))
    }
  }
}
</script>

<style lang="sass">
@import "styles/index"
</style>
