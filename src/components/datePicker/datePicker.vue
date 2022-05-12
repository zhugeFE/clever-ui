<template>
  <div class="c-date-picker">
    <div class="c-picker-handle">
      {{util.dateFormat(chosenDate)}}
    </div>
    <div class="c-picker-panel">
      <div class="c-picker-top">
        <i class="cicon-arrow-left _c-icon" @click="changeMonth(-1)"></i>
        <span class="c-center">{{util.dateFormat(currentDate, `mm${zlocal.month}yyyy${zlocal.year}`)}}</span>
        <i class="cicon-arrow-right1 c-icon_" @click="changeMonth(1)"></i>
      </div>
      <table class="c-cld">
        <thead class="c-cld-title">
        <tr>
          <td class="c-cld-secondary">{{zlocal.Sun}}</td>
          <td>{{zlocal.Mon}}</td>
          <td>{{zlocal.Tue}}</td>
          <td>{{zlocal.Wed}}</td>
          <td>{{zlocal.Thu}}</td>
          <td>{{zlocal.Fri}}</td>
          <td class="c-cld-secondary">{{zlocal.Sat}}</td>
        </tr>
        </thead>
        <tbody class="c-cld-body">
        <tr v-for="(week, i) of days" :key="i">
          <c-picker-day v-for="day of week"
                        :key="day.getTime()"
                        :day="day"
                        :min="min"
                        :max="max"
                        :highlight-start="highlightStart"
                        :highlight-end="highlightEnd"
                        :current-date="currentDate"
                        :chosen-date="chosenDate"
                        @click="onClickDay"></c-picker-day>
        </tr>
        </tbody>
      </table>
      <div class="c-to-today" v-if="showToday"><span @click="toToday">{{zlocal.today}}</span></div>
    </div>
  </div>
</template>

<script>
import {util} from '../../utils'
import CPickerDay from './day'
export default {
  name: 'cDatePicker',
  components: {CPickerDay},
  props: {
    value: null,
    showToday: {
      type: Boolean,
      default: true
    },
    /**
     * @description todo 保持展开状态
     */
    keepExpand: {
      type: Boolean,
      default: false
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
    const {
      month = '月',
      year = '年',
      monday = '一',
      tuesday = '二',
      wednesday = '三',
      thursday = '四',
      friday = '五',
      saturday = '六',
      sunday = '日',
      today = '今天'
    } = window.zlocal || {}
    let chosenDate = this.value || new Date()
    return {
      util,
      chosenDate,
      currentDate: chosenDate,
      days: this.getDays(chosenDate),
      zlocal: {
        month,
        year,
        Mon: monday.slice(0, 3),
        Tue: tuesday.slice(0, 3),
        Wed: wednesday.slice(0, 3),
        Thu: thursday.slice(0, 3),
        Fri: friday.slice(0, 3),
        Sat: saturday.slice(0, 3),
        Sun: sunday.slice(0, 3),
        today
      }
    }
  },
  watch: {
    value (date) {
      this.chosenDate = new Date(date)
      this.currentDate = new Date(date)
      this.days = this.getDays(this.chosenDate)
    }
  },
  methods: {
    getDays (date) {
      let firstDay = new Date(date.getFullYear(), date.getMonth(), 1)
      let firstOfWeek = new Date(firstDay.getTime() - firstDay.getDay() * util.dayTime)
      let days = []
      let week = []
      for (let i = 0; i < 42; i++) {
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
    onClickDay (day) {
      this.chosenDate = new Date(day)
      this.currentDate = new Date(day)
      this.days = this.getDays(this.chosenDate)
      this.$emit('input', this.chosenDate)
      this.$emit('change', this.chosenDate)
    },
    toToday () {
      this.currentDate = new Date()
      this.days = this.getDays(this.currentDate)
    },
    changeMonth (step) {
      let date = new Date(this.currentDate.getTime())
      date.setMonth(date.getMonth() + step)
      this.currentDate = date
      this.days = this.getDays(date)
    }
  }
}
</script>

<style lang="sass">
@import "styles/index"
</style>
